import React from "react";
import {
  CheckCircle2Icon,
  CircleDotIcon,
  CircleIcon,
  TruckIcon,
  PackageIcon,
  WarehouseIcon,
} from "lucide-react";

type TrackingStep = {
  id: number;
  title: string;
  description: string;
  date: string;
  status: "completed" | "current" | "upcoming";
  icon: React.ElementType;
};

const trackingSteps: TrackingStep[] = [
  {
    id: 1,
    title: "Order Placed",
    description: "Your order has been placed and confirmed.",
    date: "2023-05-01",
    status: "completed",
    icon: PackageIcon,
  },
  {
    id: 2,
    title: "Picked Up",
    description: "Package has been picked up by the carrier.",
    date: "2023-05-03",
    status: "completed",
    icon: TruckIcon,
  },
  {
    id: 3,
    title: "In Transit",
    description: "Your package is on its way to the destination.",
    date: "2023-05-05",
    status: "current",
    icon: TruckIcon,
  },
  {
    id: 4,
    title: "Arrived at Warehouse",
    description: "Package has arrived at the local warehouse.",
    date: "Estimated: 2023-05-08",
    status: "upcoming",
    icon: WarehouseIcon,
  },
  {
    id: 5,
    title: "Out for Delivery",
    description: "Package is out for delivery to the recipient.",
    date: "Estimated: 2023-05-09",
    status: "upcoming",
    icon: TruckIcon,
  },
  {
    id: 6,
    title: "Delivered",
    description: "Package has been delivered.",
    date: "Estimated: 2023-05-09",
    status: "upcoming",
    icon: CheckCircle2Icon,
  },
];

export default function ShipmentTracking() {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Tracking Information</h3>
      <div className="space-y-4">
        {trackingSteps.map((step, index) => (
          <div key={step.id} className="flex items-start">
            <div className="flex flex-col items-center mr-4">
              {step.status === "completed" && (
                <CheckCircle2Icon className="w-6 h-6 text-green-500" />
              )}
              {step.status === "current" && (
                <CircleDotIcon className="w-6 h-6 text-blue-500" />
              )}
              {step.status === "upcoming" && (
                <CircleIcon className="w-6 h-6 text-gray-300" />
              )}
              {index < trackingSteps.length - 1 && (
                <div
                  className={`w-0.5 h-full mt-2 ${
                    step.status === "completed" ? "bg-green-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <step.icon
                  className={`w-5 h-5 mr-2 ${
                    step.status === "completed"
                      ? "text-green-500"
                      : step.status === "current"
                      ? "text-blue-500"
                      : "text-gray-400"
                  }`}
                />
                <h4
                  className={`font-medium ${
                    step.status === "completed"
                      ? "text-green-500"
                      : step.status === "current"
                      ? "text-blue-500"
                      : "text-gray-500"
                  }`}
                >
                  {step.title}
                </h4>
              </div>
              <p className="text-sm text-gray-600 ml-7">{step.description}</p>
              <p className="text-xs text-gray-400 ml-7 mt-1">{step.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
