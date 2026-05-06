export const stripePlaceholder = {
  checkout: async (priceId: string) => {
    return {
      url: `/membership?checkout=${priceId}`,
      message: "Connect Stripe Checkout here with your live price id.",
    };
  },
  requiredEnv: ["STRIPE_SECRET_KEY", "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY"],
};
