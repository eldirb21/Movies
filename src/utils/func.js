const FUNC = {
  formatCurrency(amount) {
    console.log(amount);
    if (amount != '' && amount != null && amount != 0) {
      return '$ ' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    return '$ ' + 0;
  },
};
export default FUNC;
