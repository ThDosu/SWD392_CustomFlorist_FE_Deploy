import React, { useEffect, useState } from "react";
import axios from "axios";

const AddressSelector = () => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedWard, setSelectedWard] = useState("");

    // Fetch danh sách tỉnh/thành
    useEffect(() => {
        axios.get("https://provinces.open-api.vn/api/p/")
            .then(response => setProvinces(response.data))
            .catch(error => console.error("Error fetching provinces:", error));
    }, []);

    // Khi chọn tỉnh, fetch danh sách huyện/quận
    const handleProvinceChange = (e) => {
        const provinceCode = e.target.value;
        setSelectedProvince(provinceCode);
        setSelectedDistrict("");
        setSelectedWard("");
        setWards([]);

        axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
            .then(response => setDistricts(response.data.districts))
            .catch(error => console.error("Error fetching districts:", error));
    };

    // Khi chọn huyện, fetch danh sách xã/phường
    const handleDistrictChange = (e) => {
        const districtCode = e.target.value;
        setSelectedDistrict(districtCode);
        setSelectedWard("");

        axios.get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
            .then(response => setWards(response.data.wards))
            .catch(error => console.error("Error fetching wards:", error));
    };

    return (
        <div>
            <h2>Select Address</h2>
            <div>
                <label>Province/City:</label>
                <select value={selectedProvince} onChange={handleProvinceChange}>
                    <option value="">Select Province</option>
                    {provinces.map((province) => (
                        <option key={province.code} value={province.code}>
                            {province.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>District:</label>
                <select value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedProvince}>
                    <option value="">Select District</option>
                    {districts.map((district) => (
                        <option key={district.code} value={district.code}>
                            {district.name}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label>Ward:</label>
                <select value={selectedWard} onChange={(e) => setSelectedWard(e.target.value)} disabled={!selectedDistrict}>
                    <option value="">Select Ward</option>
                    {wards.map((ward) => (
                        <option key={ward.code} value={ward.code}>
                            {ward.name}
                        </option>
                    ))}
                </select>
            </div>

            <h3>Selected Address:</h3>
            <p>
                {selectedProvince && provinces.find(p => p.code === selectedProvince)?.name}{" "}
                {selectedDistrict && districts.find(d => d.code === selectedDistrict)?.name}{" "}
                {selectedWard && wards.find(w => w.code === selectedWard)?.name}
            </p>
        </div>
    );
};

export default AddressSelector;
