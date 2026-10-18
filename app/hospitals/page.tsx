
import HospitalsClient, {
  type HospitalRecord,
} from "@/components/hospitals/hospitals-client";
import { getRouteData } from "@/lib/route-data";

export const metadata = {
  title: "হাসপাতাল ও ক্লিনিক | নালিতাবাড়ী উপজেলা",
  description:
    "নালিতাবাড়ী উপজেলার সরকারি ও বেসরকারি হাসপাতাল, ক্লিনিক এবং ডায়াগনস্টিক সেন্টারের তথ্য, ঠিকানা ও যোগাযোগের নম্বর খুঁজুন।",
};

export default async function HospitalsPage() {
  const hospitals =
    await getRouteData<HospitalRecord>("hospitals");

  return <HospitalsClient hospitals={hospitals} />;
}
