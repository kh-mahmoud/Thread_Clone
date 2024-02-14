import UserCard from '@/components/cards/UserCard';
import SearchBar from '@/components/shared/SearchBar';
import { fetchUser, fetchUsers } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';





 const page = async ({searchParams}:{searchParams:{q:string}})=> {
  const user = await currentUser()
  if (!user) return null

  const userInfo = await fetchUser(user?.id)
  if(!userInfo?.onboarded) return redirect('/onboarding') 

   const result = await fetchUsers({
    userId: user?.id ,
    searchString: searchParams.q,
    // pageNumber: 1,
    // pageSize: 2
})
  

  return (
    <section>
        <h1 className="head-text mb-10">Search</h1>

        {/*  Search Bar */}
          <SearchBar  />
         {result.users.length === 0 ?(
           <p className='no-result mt-10'>No users found</p>
         ):(
          result.users.map((person:any) => (  
                  <UserCard key={person.id}
                      id={person.userId} 
                      name={person.name}
                      username={person.username}
                      imageUrl= {person.image}
                  />
              ))
         ) }

        <div>
        
        </div>

    </section>
  );
}

export default page;
