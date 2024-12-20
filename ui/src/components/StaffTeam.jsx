import staff from "../configs/staff.config"; // assuming your staff config is in `configs/staff.config.js`

function StaffTeam() {
    return (
        <div className="flex flex-col items-center justify-center w-full p-5 bg-bgMain/40 backdrop-blur-lg rounded-lg shadow-lg text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {staff.map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <img
                            src={member.pfp}
                            alt={`${member.name}'s profile`}
                            className="w-20 h-20 rounded-full"
                        />
                        <h3 className="mt-2 text-lg font-semibold">{member.name}</h3>
                        <p className="text-sm text-gray-300">{member.rank}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StaffTeam;
