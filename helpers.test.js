describe("Helpers test(with setup and tear-down)", function() {
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });
    it('should return the sum of all tips on payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tip Amt')).toEqual(20);

        billAmtInput.value = 500;
        tipAmtInput.value = 100;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(600);
    });
    it('should give sum of tip percent of a tip on calculateTipPercent()',function() {
        expect(calculateTipPercent(100, 25)).toEqual(25);
    });

    it('should generate new td from value and append to tr on appendTd(tr, value)', function() {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'test');
        expect(newTr.firstChild.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function() {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function() {
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