// script.js
function calculateHealth() {
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let bp = document.getElementById('bp').value.split('/');
    let diabetes = document.getElementById('diabetes').value;

    // Calculate BMI
    let heightInMeters = height / 100;
    let bmi = weight / (heightInMeters * heightInMeters);
    bmi = bmi.toFixed(2); // Round to 2 decimal places

    // Blood Pressure and Diabetes level interpretation
    let bpStatus = 'Normal';
    if (parseInt(bp[0]) > 120) bpStatus = 'High Blood Pressure';
    if (parseInt(bp[0]) < 90) bpStatus = 'Low Blood Pressure';

    let diabetesStatus = (diabetes >= 120) ? 'High' : (diabetes < 80) ? 'Low' : 'Normal';

    // BMI Categories
    let bmiCategory = '';
    if (bmi < 18.5) bmiCategory = 'Underweight';
    else if (bmi >= 18.5 && bmi < 24.9) bmiCategory = 'Normal Weight';
    else if (bmi >= 25 && bmi < 29.9) bmiCategory = 'Overweight';
    else bmiCategory = 'Obese';

    // Recommendations based on BMI, BP, and Diabetes level
    let foodRecommendation = '';
    if (bmiCategory === 'Underweight') {
        foodRecommendation = 'Increase protein intake, eat calorie-dense foods.';
    } else if (bmiCategory === 'Normal Weight') {
        foodRecommendation = 'Maintain a balanced diet with fruits, veggies, and lean protein.';
    } else if (bmiCategory === 'Overweight') {
        foodRecommendation = 'Reduce calorie intake, focus on low-carb, high-fiber foods.';
    } else {
        foodRecommendation = 'Consult a doctor for a strict diet plan.';
    }

    let medicineRecommendation = '';
    if (bpStatus === 'High Blood Pressure') {
        medicineRecommendation = 'Consider blood pressure-lowering medications.';
    } else if (bpStatus === 'Low Blood Pressure') {
        medicineRecommendation = 'Increase salt intake and consult your doctor.';
    } else {
        medicineRecommendation = 'Maintain a healthy lifestyle with moderate exercise.';
    }

    if (diabetesStatus === 'High') {
        medicineRecommendation += ' Consider taking medication to control blood sugar.';
    } else if (diabetesStatus === 'Low') {
        medicineRecommendation += ' Monitor your sugar levels closely.';
    }

    // Show results
    document.getElementById('bmiResult').innerText = `Your BMI: ${bmi} (${bmiCategory})`;
    document.getElementById('foodRecommendation').innerText = `Food Recommendation: ${foodRecommendation}`;
    document.getElementById('medicineRecommendation').innerText = `Medicine/Lifestyle: ${medicineRecommendation}`;

    // Show results section
    document.getElementById('results').style.display = 'block';
}
