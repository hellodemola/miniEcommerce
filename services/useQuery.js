import { useQuery } from 'react-query';
import { getDeliveryDate, getSingleOrder } from './endpoints';

const QueryDeliveryDate = () => useQuery(['deliveryDate'], () => getDeliveryDate());

const QuerySingleOrder = (email) => useQuery(['singleOrder'], email, () => getSingleOrder(email));

export { QueryDeliveryDate, QuerySingleOrder };
