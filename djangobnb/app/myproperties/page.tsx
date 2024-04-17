import PropertList from "../components/properties/PropertyList"

const MyPropertiesPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6">
            <h1 className=" my-6 mb-6 text-2xl">My Properties</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <PropertList />
            </div>
        </main>
    )
}

export default MyPropertiesPage