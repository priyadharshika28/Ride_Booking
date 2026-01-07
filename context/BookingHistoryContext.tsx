"use client";

import { createContext, useState, useEffect, useContext } from "react";

type Ride = {
    id: number;
    date: string;
    time: string;
    pickup: string;
    dropoff: string;
    price: string;
    paymentMethod: string;
    status: string;
};

type BookingHistoryContextType = {
    history: Ride[];
    addToHistory: (ride: Ride) => void;
};

const BookingHistoryContext = createContext<BookingHistoryContextType | null>(null);

export function BookingHistoryProvider({ children }: { children: React.ReactNode }) {
    const [history, setHistory] = useState<Ride[]>([]);

    // Load history from localStorage on mount
    useEffect(() => {
        const savedHistory = localStorage.getItem("rideHistory");
        if (savedHistory) {
            try {
                setHistory(JSON.parse(savedHistory));
            } catch (e) {
                console.error("Failed to parse history", e);
            }
        }
    }, []);

    const addToHistory = (ride: Ride) => {
        const updatedHistory = [ride, ...history];
        setHistory(updatedHistory);
        localStorage.setItem("rideHistory", JSON.stringify(updatedHistory));
    };

    return (
        <BookingHistoryContext.Provider value={{ history, addToHistory }}>
            {children}
        </BookingHistoryContext.Provider>
    );
}

export function useBookingHistory() {
    const context = useContext(BookingHistoryContext);
    if (!context) {
        throw new Error("useBookingHistory must be used within a BookingHistoryProvider");
    }
    return context;
}
