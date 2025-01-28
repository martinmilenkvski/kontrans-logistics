import { useState } from "react";
import { TruckIcon, PackageIcon, ArrowLeftIcon } from "lucide-react";
import ShipmentTracking from "./ShipmentTracking";
import { Link } from "react-router-dom";

// Mock data for shipments
const shipments = [
  {
    id: 1,
    containerNumber: "CONT001",
    originPort: "Shanghai Port",
    shipper: "China Shipping Co.",
    deliveryPort: "Port of Los Angeles",
    finalDestination: "Los Angeles Distribution Center",
    status: "In Transit",
    type: "40ft High Cube",
  },
  {
    id: 2,
    containerNumber: "CONT002",
    originPort: "Hamburg Port",
    shipper: "German Logistics GmbH",
    deliveryPort: "Port of New York",
    finalDestination: "New York City Warehouse",
    status: "Delivered",
    type: "20ft Standard",
  },
  {
    id: 3,
    containerNumber: "CONT003",
    originPort: "Singapore Port",
    shipper: "Asia Pacific Shippers",
    deliveryPort: "Port of Rotterdam",
    finalDestination: "Rotterdam Distribution Hub",
    status: "Pending",
    type: "40ft Refrigerated",
  },
  {
    id: 4,
    containerNumber: "CONT004",
    originPort: "Jebel Ali Port",
    shipper: "Middle East Cargo LLC",
    deliveryPort: "Port Botany",
    finalDestination: "Sydney Logistics Center",
    status: "In Transit",
    type: "20ft Open Top",
  },
  {
    id: 5,
    containerNumber: "CONT005",
    originPort: "Tokyo Port",
    shipper: "Japan Export Co.",
    deliveryPort: "Port Metro Vancouver",
    finalDestination: "Vancouver City Depot",
    status: "Delayed",
    type: "40ft Flat Rack",
  },
];

export default function ShipmentsPage() {
  const [selectedShipment, setSelectedShipment] = useState(shipments[0]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Shipments</h1>
        <Link
          ref="/"
          className="flex items-center gap-2 px-4 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#FF6B6B]/90 transition-colors"
          to={""}
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Return to Dashboard
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Shipment List */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Container Shipments</h2>
          <ul className="space-y-4">
            {shipments.map((shipment) => (
              <li
                key={shipment.id}
                className={`cursor-pointer p-3 rounded-lg transition-colors ${
                  selectedShipment.id === shipment.id
                    ? "bg-[#FF6B6B] text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedShipment(shipment)}
              >
                <div className="flex items-center gap-3">
                  <TruckIcon className="w-5 h-5" />
                  <div>
                    <div className="font-medium">
                      {shipment.containerNumber}
                    </div>
                    <div className="text-sm opacity-80">
                      {shipment.originPort} to {shipment.deliveryPort}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Shipment Details */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Shipment Details</h2>
          {selectedShipment && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <PackageIcon className="w-6 h-6 text-[#FF6B6B]" />
                <div className="text-xl font-medium">
                  {selectedShipment.containerNumber}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Origin Port</div>
                  <div className="font-medium">
                    {selectedShipment.originPort}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Shipper</div>
                  <div className="font-medium">{selectedShipment.shipper}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Delivery Port</div>
                  <div className="font-medium">
                    {selectedShipment.deliveryPort}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Final Destination</div>
                  <div className="font-medium">
                    {selectedShipment.finalDestination}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Status</div>
                  <div className="font-medium">{selectedShipment.status}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Container Type</div>
                  <div className="font-medium">{selectedShipment.type}</div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <ShipmentTracking />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
