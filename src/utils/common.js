
const getSequenceNumber = (sequence, digit) => {
    
    var _no = '0000000000'; 
    var sequence_no = String(_no + sequence).substr( String(_no + sequence).length-digit, digit)

    return sequence_no;
};

module.exports = { getSequenceNumber };