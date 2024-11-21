import { useState } from 'react';
import { sort, countDoubleNumber, removeDuplicates, flipPieces, removeCardByNumber } from '../utils';

const HomePage = () => {
    const defaultPieces: [number, number][] = [
        [6, 1], [4, 3], [5, 1], [3, 4], [1, 1], [3, 4], [1, 2],
        [2,1],[8,8],[9,7],[2,3]
    ];

    const [pieces, setPieces] = useState<[number, number][]>(defaultPieces);
    const [removeNumber, setRemoveNumber] = useState<number | ''>(''); 

    const handleSort = (order: 'asc' | 'desc') => {
        const sorted = sort([...pieces], order); 
        setPieces(sorted);
    };

    // Mereset kartu domino ke data default
    const handleReset = () => {
        setPieces(defaultPieces);
    };

    // Untuk flip
    const handleFlip = () => {
        const flipped = flipPieces(pieces);
        setPieces(flipped);
    };

    // menghapus kartu yang duplikat
    const handleRemoveDup = () => {
        const uniquePieces = removeDuplicates(pieces);
        setPieces(uniquePieces);
    };

    // menghapus kartu berdasarkan angka yang dimasukkan di input
    const handleRemove = () => {
        if (removeNumber === '') return;
        const filteredPieces = removeCardByNumber(pieces, Number(removeNumber)); 
        setPieces(filteredPieces);
        setRemoveNumber('');
    };
    

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-4">Dominoes</h1>

            {/* Tampilan Source dan Double Numbers */}
            <div className="mb-6">
                <p className="text-lg">
                    <strong>Source:</strong> {JSON.stringify(pieces)}
                </p>
                <p className="text-lg">
                    <strong>Double Numbers:</strong> {countDoubleNumber(pieces)} {/* Gunakan pieces di sini */}
                </p>
            </div>

            {/* Kartu domino */}
            <div className="grid grid-cols-5 gap-4">
                {pieces.map((piece, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center border-2 border-black rounded-lg bg-white w-20 h-36 shadow-lg"
                    >
                        <div className="absolute top-1/2 w-full border-t-2 border-black"></div>
                        <div className="absolute top-4 text-xl font-bold">{piece[0]}</div>
                        <div className="absolute bottom-4 text-xl font-bold">{piece[1]}</div>
                    </div>
                ))}
            </div>

            {/* Button button an */}
            <div className="flex justify-center gap-4 mt-6">
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={() => handleSort('asc')}
                >
                    Sort (ASC)
                </button>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={() => handleSort('desc')}
                >
                    Sort (DESC)
                </button>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={handleFlip}
                >
                    Flip
                </button>
                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={handleRemoveDup}
                >
                    Remove Dup
                </button>
                <button
                    className="bg-red-500 text-white py-2 px-4 rounded"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>

            {/* Input untuk menghapus kartu berdasarkan angka */}
            <div className="flex mt-6">
                <input
                    type="number"
                    value={removeNumber}
                    onChange={(e) => setRemoveNumber(Number(e.target.value))}
                    className="border-2 p-2 rounded"
                    placeholder="Input Number"
                />
                <button
                    onClick={handleRemove}
                    className="bg-yellow-500 text-white py-2 px-4 rounded ml-4"
                >
                    Remove
                </button>
            </div>
        </div>
    );
};

export default HomePage;
