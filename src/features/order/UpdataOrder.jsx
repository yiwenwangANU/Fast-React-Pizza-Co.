import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";
function UpdataOrder({ order, children }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">{children}</Button>
    </fetcher.Form>
  );
}

export default UpdataOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
