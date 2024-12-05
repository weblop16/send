import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function UserRank() {
    const user = useSelector(selectUser);

    const levelNames = useMemo(
        () => [
            "Beginner",
            "Wood",
            "Bronze",
            "Silver",
            "Gold",
            "Platinum",
            "Diamond",
            "Epic",
            "Legendary",
            "Master",
            "GrandMaster",
            "Boss",
        ],
        []
    );

    const levelMinPoints = useMemo(
        () => [
            0, 1000, 10000, 50000, 100000, 500000, 1000000, 10000000, 50000000, 100000000, 500000000, 1000000000,
        ],
        []
    );

    const [levelIndex, setLevelIndex] = useState(0);
    
    return <div>UserRank</div>;
}

export default UserRank;