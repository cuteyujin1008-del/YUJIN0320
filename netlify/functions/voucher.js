exports.handler = async (event) => {
  const voucherId = event.queryStringParameters?.id;

  if (!voucherId) {
    return {
      statusCode: 400,
      body: "전표 ID 없음"
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/plain"
    },
    body: `PDF 생성 예정: ${voucherId}`
  };
};
