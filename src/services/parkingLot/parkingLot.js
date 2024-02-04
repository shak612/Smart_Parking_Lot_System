// ParkingLot class
class ParkingLot {
    constructor() {
      this.parkingSpots = []; // Array to store available parking spots
    }
  
    allocateSpot(vehicleType) {
      const availableSpot = this.parkingSpots.find(spot => !spot.isOccupied && spot.type === vehicleType);
  
      if (availableSpot) {
        availableSpot.isOccupied = true;
        return availableSpot;
      } else {
        // Handle no available spot for the given vehicle type
        return null;
      }
    }
  
    releaseSpot(spot) {
      spot.isOccupied = false;
    }
  }
  