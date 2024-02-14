import { fetchUser, getActivity } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import moment from 'moment';

const page = async () => {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(user?.id);
    if(!userInfo?.onboarded) return redirect('/');

    const activities = await getActivity(userInfo.id);

    return (
        <section>
            <h1 className="head-text mb-10">Activity</h1>

            <section className="mt-10 flex flex-col gap-5">
                {activities.length > 0 ? (
                    activities.map((activity:any) => {
                        const timeAgo = moment(activity.createdAt).fromNow();
                        return (
                            <Link key={activity.id} href={`/thread/${activity.parentId}`}>
                                <article className="activity-card">
                                    <div className="flex items-center gap-2 ">
                                        <div className={"relative overflow-hidden h-10 w-10 rounded-full"}>
                                              <Image
                                                  src={activity.author.image}
                                                  alt={"profile image"}
                                                  fill
                                                  className="rounded-full object-cover"
                                              />
                                          </div>
                                          <p className="text-small-regular text-light-1">
                                              <span className="mr-1 text-primary-500">{activity.author.name}</span>
                                              replied to your thread 
                                          </p>
                                    </div>
                                    <p className="text-small-medium  text-gray-1">{timeAgo}</p>
                                </article>
                            </Link>
                        );
                    })
                ) : (
                    <p>No Activity yet</p>
                )}
            </section>
        </section>
    );
};

export default page;
