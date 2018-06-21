ninja.wallets.donate = {
    open: function () {
        document.getElementById("donatearea").style.display = "block";
        this.displayQrCode()
    },

    close: function () {
        document.getElementById("donatearea").style.display = "none";
    },
    
    displayQrCode: function () {
        var keyValuePair = {};
    	keyValuePair.donateqrcode = janin.selectedCurrency.donate;
		ninja.qrCode.showQrCode(keyValuePair, 4);
        
        document.getElementById("donateqrcode").style.display = "block";
    }
};