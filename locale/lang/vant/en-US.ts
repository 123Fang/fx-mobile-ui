export default {
  name: 'Name',
  tel: 'Phone',
  save: 'Save',
  clear: 'Clear',
  cancel: 'Cancel',
  confirm: 'Confirm',
  delete: 'Delete',
  loading: 'Loading...',
  noCoupon: 'No coupons',
  nameEmpty: 'Please fill in the name',
  addContact: 'Add contact',
  telInvalid: 'Malformed phone number',
  icsmCalendar: {
    end: 'End',
    start: 'Start',
    title: 'Calendar',
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Choose no more than ${maxRange} days`,
  },
  icsmCascader: {
    select: 'Select',
  },
  icsmPagination: {
    prev: 'Previous',
    next: 'Next',
  },
  icsmPullRefresh: {
    pulling: 'Pull to refresh...',
    loosing: 'Loose to refresh...',
  },
  icsmSubmitBar: {
    label: 'Total:',
  },
  icsmCoupon: {
    unlimited: 'Unlimited',
    discount: (discount: number) => `${discount * 10}% off`,
    condition: (condition: number) => `At least ${condition}`,
  },
  icsmCouponCell: {
    title: 'Coupon',
    count: (count: number) => `You have ${count} coupons`,
  },
  icsmCouponList: {
    exchange: 'Exchange',
    close: 'Close',
    enable: 'Available',
    disabled: 'Unavailable',
    placeholder: 'Coupon code',
  },
  icsmAddressEdit: {
    area: 'Area',
    areaEmpty: 'Please select a receiving area',
    addressEmpty: 'Address can not be empty',
    addressDetail: 'Address',
    defaultAddress: 'Set as the default address',
  },
  icsmAddressList: {
    add: 'Add new address',
  },
};
