export class Car {
    vin: string;
    year :string;
    brand :string;
    color :string;
    
    setCar(vin: string, year: string, brand: string, color: string)
    {
        this.vin = vin;
        this.year = year;
        this.brand = brand;
        this.color = color;
    }
}