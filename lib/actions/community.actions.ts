"use server"
import { prisma } from '../prismaClient';




export async function createCommunity(
    id: string,
    name: string,
    username: string,
    image: string,
    bio: string,
    createdById: string
  ) {
    try {
      const user = await prisma.user.findUnique({
        where: { userId: createdById },
      });
  
      if (!user) {
        throw new Error('User not found');
      }
  
      const createdCommunity = await prisma.community.create({
        data: {
          id,
          name,
          username,
          image,
          bio,
          createdBy: { connect: { id: createdById } },
        },
      });
  
      await prisma.user.update({
        where: { userId: createdById },
        data: { communities: { connect: { id: createdCommunity.id } } },
      });
  
      return createdCommunity;
    } catch (error) {
      console.error('Error creating community:', error);
      throw error;
    }
  }
  
  export async function fetchCommunityDetails(id: string) {
    try {
      const communityDetails = await prisma.community.findUnique({
        where: { id },
        include: { createdBy: true, members: true },
      });
  
      return communityDetails;
    } catch (error) {
      console.error('Error fetching community details:', error);
      throw error;
    }
  }
  
  export async function fetchCommunityPosts(id: string) {
    try {
      const communityPosts = await prisma.community.findUnique({
        where: { id },
        include: {
          threads: {
            include: {
              author: { select: { name: true, image: true, id: true } },
              children: {
                include: { author: { select: { image: true, id: true } } },
              },
            },
          },
        },
      });
  
      return communityPosts;
    } catch (error) {
      console.error('Error fetching community posts:', error);
      throw error;
    }
  }
  
  export async function fetchCommunities({
    searchString = '',
    pageNumber = 1,
    pageSize = 20,
    sortBy = 'desc',
  }: {
    searchString?: string;
    pageNumber?: number;
    pageSize?: number;
    sortBy?: 'asc' | 'desc';
  }) {
    try {
      const skipAmount = (pageNumber - 1) * pageSize;
  
      const query: any = {};
  
      if (searchString.trim() !== '') {
        query.OR = [
          { username: { contains: searchString, mode: 'insensitive' } },
          { name: { contains: searchString, mode: 'insensitive' } },
        ];
      }
  
      const sortOptions = { createdAt: sortBy };
  
      const communities = await prisma.community.findMany({
        where: query,
        orderBy: sortOptions,
        skip: skipAmount,
        take: pageSize,
        include: { members: true },
      });
  
      const totalCommunitiesCount = await prisma.community.count({ where: query });
  
      const isNext = totalCommunitiesCount > skipAmount + communities.length;
  
      return { communities, isNext };
    } catch (error) {
      console.error('Error fetching communities:', error);
      throw error;
    }
  }
  

  export async function addMemberToCommunity(
  communityId: string,
  memberId: string
) {
  try {
    const community = await prisma.community.findUnique({
      where: { id: communityId },
    });

    if (!community) {
      throw new Error('Community not found');
    }

    const user = await prisma.user.findUnique({
      where: { userId: memberId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    if (community.members.find((m:any) => m.id === user.id)) {
      throw new Error('User is already a member of the community');
    }

    await prisma.community.update({
      where: { id: communityId },
      data: { members: { connect: { userId: memberId } } },
    });

    await prisma.user.update({
      where: { userId: memberId },
      data: { communities: { connect: { id: communityId } } },
    });

    return community;
  } catch (error) {
    console.error('Error adding member to community:', error);
    throw error;
  }
}

export async function removeUserFromCommunity(
  userId: string,
  communityId: string
) {
  try {
    const user = await prisma.user.findUnique({
      where: { userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    const community = await prisma.community.findUnique({
      where: { id: communityId },
    });

    if (!community) {
      throw new Error('Community not found');
    }

    await prisma.community.update({
      where: { id: communityId },
      data: { members: { disconnect: { userId } } },
    });

    await prisma.user.update({
      where: { userId },
      data: { communities: { disconnect: { id: communityId } } },
    });

    return { success: true };
  } catch (error) {
    console.error('Error removing user from community:', error);
    throw error;
  }
}

export async function updateCommunityInfo(
  communityId: string,
  name: string,
  username: string,
  image: string
) {
  try {
    const updatedCommunity = await prisma.community.update({
      where: { id: communityId },
      data: { name, username, image },
    });

    if (!updatedCommunity) {
      throw new Error('Community not found');
    }

    return updatedCommunity;
  } catch (error) {
    console.error('Error updating community information:', error);
    throw error;
  }
}

export async function deleteCommunity(communityId: string) {
  try {
    const deletedCommunity = await prisma.community.delete({
      where: { id: communityId },
    });

    if (!deletedCommunity) {
      throw new Error('Community not found');
    }

    await prisma.thread.deleteMany({
      where: { communityId },
    });

    const communityUsers = await prisma.user.findMany({
      where: { communities: { some: { id: communityId } } },
    });

    const updateUserPromises = communityUsers.map((user:any) =>
      prisma.user.update({
        where: { id: user.id },
        data: { communities: { disconnect: { id: communityId } } },
      })
    );

    await Promise.all(updateUserPromises);

    return deletedCommunity;
  } catch (error) {
    console.error('Error deleting community:', error);
    throw error;
  }
}