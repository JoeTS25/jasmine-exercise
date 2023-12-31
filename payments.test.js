describe("Payments test (with setup and tear-down)", function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });
    it ('should add a new payment to allPayments on submitPaymentInfo()', function(){
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment 1'].billAmt).toEqual('100');
        expect(allPayments['payment 1'].tipAmt).toEqual('20');
        expect(allPayments['payment 1'].tipPercent).toEqual(20);
    })

    it('should update payment on #paymentTable on appendPaymentTable()', function() {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);

        let curdTdList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(curdTdList.length).toEqual(4);
        expect(curdTdList[0].innerText).toEqual('$100');
        expect(curdTdList[1].innerText).toEqual('$20');
        expect(curdTdList[2].innerText).toEqual('20%');
        expect(curdTdList[3].innerText).toEqual('X');
    })

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
})