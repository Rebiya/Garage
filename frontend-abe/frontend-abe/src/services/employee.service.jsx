// employee.service.jsx
const api_url = import.meta.env.VITE_API_URL;

const createEmployee = async (formData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  try {
    const response = await fetch(`${api_url}/employee`, requestOptions);
    console.log("🧐 Response:", response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Check content-type before parsing as JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Response is not in JSON format");
    }

    return response.json();
  } catch (error) {
    console.error("❌ Fetch error:", error);
    throw error;
  }
};

const employeeService = { createEmployee };
export default employeeService;
