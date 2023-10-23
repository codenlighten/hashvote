const opreturnPost = async (data, receiver, privateKey, utxo) => {
	const tx = bsv.Transaction();
	tx.from(utxo);
	tx.addOutput(
		new bsv.Transaction.Output({
			script: bsv.Script.buildSafeDataOut([data]),
			satoshis: 0,
		})
	);
	tx.change(receiver);
	tx.feePerKb(500);
	tx.sign(privateKey);
};
