import { findAllOrders, findOrderById } from "./orders-db.js";

export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

export function myOrders(orders) {
  return orders.filter((order) => order.city === "Cairo" && order.status === "pending");
}

export function summarize(orders) {
  return orders.reduce((sum, order) => sum + order.quantity, 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch (error) {
    return `No order with id ${id}`;
  }
}

export function toJsonLines(orders) {
  const picked = orders.map((order) => ({ student: order.student, city: order.city }));
  return JSON.stringify(picked);
}
