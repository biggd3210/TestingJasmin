describe("Helpers test", function() {
    beforeEach(function () {
      // initialization logic;
      tipAmtInput.value = 4;
      billAmtInput.value = 20;
      submitPaymentInfo();
    });
  
    it('should sum total tip amount after running sumPaymentTotal', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(4);
      billAmtInput.value = 35;
      tipAmtInput.value = 7;

      submitPaymentInfo();

      expect(sumPaymentTotal('tipAmt')).toEqual(11);
    });
  
    it('should sum total bill amount after running sumPaymentTotal', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(20);
        billAmtInput.value = 35;
        tipAmtInput.value = 7;
  
        submitPaymentInfo();
  
        expect(sumPaymentTotal('billAmt')).toEqual(55);
      });

    it('should calculate the tip percentage based on bill amount and tip amount', function() {  
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
    });
  
    it('should generate new td from value and append it to the tr on appendTD(tr, value)', function() {
      let newTr = document.createElement('tr');

      appendTd(newTr, 'test');

      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('test')
    })

    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    })
  
    afterEach(function() {
      // teardown logic
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });
  