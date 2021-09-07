interface BusinessPartner {
  name: string;
  credit: number;
}
interface Identity {
  id: number;
  name: string;
}
interface Contact {
  email: string;
  phone: string;
}
type Employee = Identity & Contact & BusinessPartner;
type Customer = BusinessPartner & Contact;
let e: Employee = {
  id: 100,
  name: 'John Doe',
  email: 'john@example.com',
  phone: '090909099',
  credit: 1000,
};
