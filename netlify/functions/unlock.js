// netlify/functions/unlock.js
exports.handler = async (event) => {
  try {
    const { code } = JSON.parse(event.body || '{}');

    // This is your secret code that only lives on the server now
    const SECRET_CODE = "GOLDENSPOON2025";

    if (code === SECRET_CODE) {
      return {
        statusCode: 200,
        body: JSON.stringify({ ok: true, message: "Premium unlocked!" })
      };
    }

    return {
      statusCode: 403,
      body: JSON.stringify({ ok: false, message: "Incorrect or unpaid code." })
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
