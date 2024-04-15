import ContactButton from "@/app/components/ContactButton";
import PropertList from "@/app/components/properties/PropertyList";
import Image from "next/image";

const landlordDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <aside className="col-span-1 mb-4">
                  <div className="flex flex-col items-center p-6 rounded-xl border border-gray-200 shadow-xl">
                    <Image
                        src={"/profile_pic_1.jpg"}
                        width={200}
                        height={200}
                        alt="The user name"
                        className="rounded-full"
                     />
                     <h1 className="mt-6 text-2xl">Name</h1>
                     <ContactButton />
                  </div>
                </aside>
                <div className="col-span-3 pl-0 md:pl-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <PropertList />
                    </div>
                </div>
            </div>
        </main>
    )
}   

export default landlordDetailPage;