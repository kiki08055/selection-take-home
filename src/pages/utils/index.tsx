export const sort = (pieces: [number, number][], order: 'asc' | 'desc'): [number, number][] => {
    return pieces.sort((a, b) => {
        const sumA = a[0] + a[1]; // angka pertama
        const sumB = b[0] + b[1]; // angka kedua d bawah/belakang
        if (order === 'asc') {
            return sumA - sumB;
        } else {
            return sumB - sumA;
        }
    });
};

// Fungsi menghitung jumlah angka ganda 
export const countDoubleNumber = (pieces: [number, number][]): number => {
    let count = 0;
    pieces.forEach(([a, b]) => {
        if (a === b) {
            count++;
        }
    });
    return count;
};

// Fungsi menghapus kartu duplikat
export const removeDuplicates = (pieces: [number, number][]): [number, number][] => {
    return pieces.filter(
        (value, index, self) =>
            index === self.findIndex((item) => item[0] === value[0] && item[1] === value[1])
    );
};

// Fungsi flip
export const flipPieces = (pieces: [number, number][]): [number, number][] => {
    return pieces.map(piece => [piece[1], piece[0]]);
};

// Fungsi untuk menghapus jumlh 
export const removeCardByNumber = (pieces: [number, number][], sum: number): [number, number][] => {
    return pieces.filter(piece => (piece[0] + piece[1]) !== sum);
};



