export interface Notice {
  id: number;
  date: string;
  title: string;
}

export interface User {
  token: string;
}

export interface ProductInfo {
  id: number;
  beverageName: string;
  imageURL: string;
  price: string;
}

export interface ProductDetailInfo {
  detailData: {
    id: number;
    beverageName: string;
    imageURL: string;
    price: string;
    description: string;
    shopName: null;
    nutrition_data: {
      fat: number;
      kcal: number;
      sugar: number;
      sodium: number;
      caffein: number;
      protein: number;
    };
    review_data: {
      id: number;
      content: string;
      nickname: string;
      createdAt: string;
    }[];
  };
}

export interface ProductOption {
  isIce: boolean;
  amount: number;
  isTakeout: boolean;
  isJumbo: boolean;
  sugar: 0 | 30 | 50 | 70 | 100;
  iceSize: 'regular' | 'less' | 'full';
  additionalOption: {
    pearl: number;
    whitePearl: number;
    aloe: number;
    coconut: number;
    milkform: number;
    cheeseform: number;
  };
}

export interface OrderReq {
  amount: number;
  cold: number;
  totalPrice: number;
  takeOut: number;
  sugar: number;
  ice: 'regular' | 'less' | 'full';
  toppings: {
    id: number;
    amount: number;
  }[];
}

export interface OrderRes {
  orderData: {
    orderId: number;
    userName: string;
    phone_number: string;
    shopName: string;
    address: string;
    take_out: number;
    point: number;
    beverage_name: string;
    beverage_image: string;
    price: string;
    amount: number;
    cold: number;
    sugar: number;
    ice: string;
    toppingData: {
      amount: number;
      topping_id: number;
    }[];
    total_price: string;
  };
}

export interface AgreeListProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
