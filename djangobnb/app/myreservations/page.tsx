import ContactButton from "@/app/components/ContactButton";
import PropertList from "@/app/components/properties/PropertyList";
import Image from "next/image";

const MyReservationsPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6">
                <h1 className=" my-6 mb-6 text-2xl">My Reservations</h1>
                <div>
                    <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-ml border border-gray-200">
                        <div className="col-span-1">
                            <div className="relative overflow-hidden aspect-square rounded-xl">
                                <Image
                                src={"/beach_1.jpg"}
                                fill
                                className="object-cover scale-110 transition h-full w-full"
                                alt="Beach house"
                                />
                            </div>
                        </div>
                        <div className="col-span-3">
                                <h2 className="mb-4 text-xl">Property Name</h2>
                                <p className="mb-2"><strong>check-in date </strong>14/2/2024</p>
                                <p className="mb-2"><strong>check-out date </strong>18/2/2024</p>
                                <p className="mb-2"><strong>Number of Nights </strong>3</p>
                                <p className="mb-2"><strong>Total Price</strong>$800</p>
                                <div className="cursor-pointer py-4 px-6 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl mt-6 inline-block">
                                    Go To Property
                                </div>
                        </div>

                    </div>
                </div>
                <div className="space-y-4">
                    <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-ml border border-gray-200">
                        <div className="col-span-1">
                            <div className="relative overflow-hidden aspect-square rounded-xl">
                                <Image
                                src={"/beach_1.jpg"}
                                fill
                                className="object-cover scale-110 transition h-full w-full"
                                alt="Beach house"
                                />
                            </div>
                        </div>
                        <div className="col-span-3">
                                <h2 className="mb-4 text-xl">Property Name</h2>
                                <p className="mb-2"><strong>check-in date </strong>14/2/2024</p>
                                <p className="mb-2"><strong>check-out date </strong>18/2/2024</p>
                                <p className="mb-2"><strong>Number of Nights </strong>3</p>
                                <p className="mb-2"><strong>Total Price</strong>$800</p>
                                <div className="cursor-pointer py-4 px-6 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl mt-6 inline-block">
                                    Go To Property
                                </div>
                        </div>


                    </div>
                </div>
                <div>
                    <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-ml border border-gray-200">
                        <div className="col-span-1">
                            <div className="relative overflow-hidden aspect-square rounded-xl">
                                <Image
                                src={"/beach_1.jpg"}
                                fill
                                className="object-cover scale-110 transition h-full w-full"
                                alt="Beach house"
                                />
                            </div>
                        </div>
                        <div className="col-span-3">
                                <h2 className="mb-4 text-xl">Property Name</h2>
                                <p className="mb-2"><strong>check-in date </strong>14/2/2024</p>
                                <p className="mb-2"><strong>check-out date </strong>18/2/2024</p>
                                <p className="mb-2"><strong>Number of Nights </strong>3</p>
                                <p className="mb-2"><strong>Total Price</strong>$800</p>
                                <div className="cursor-pointer py-4 px-6 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl mt-6 inline-block">
                                    Go To Property
                                </div>
                        </div>


                    </div>
                </div>
        </main>
    )

}

export default MyReservationsPage; 