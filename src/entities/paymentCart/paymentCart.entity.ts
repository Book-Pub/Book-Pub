// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   CreateDateColumn,
//   UpdateDateColumn,
//   ManyToOne,
// } from "typeorm";

// import { Payment } from "../payment/payment.entity";
// import { v4 as uuid } from "uuid";
// import { Order } from "../order/order.entity";

// @Entity("payment_cart")
// export class PaymentCart {
//   @PrimaryGeneratedColumn("uuid")
//   readonly id: string;

//   @ManyToOne(() => Order)
//   order: Order;

//   @ManyToOne(() => Payment)
//   payment: Payment;

//   @CreateDateColumn({ name: "created_at" })
//   createdAt: Date;

//   @UpdateDateColumn({ name: "updated_at" })
//   updatedAt: Date;

//   constructor() {
//     if (!this.id) {
//       this.id = uuid();
//     }
//   }
// }
