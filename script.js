function showAbsentStudents() {
  const rollNumbersInput = document.getElementById('rollNumbers').value;
  const enteredRollNumbers = rollNumbersInput.split(',').map((num) => num.trim());
  const studentsData = {
    students: [
      { roll: '21CSL253', name: 'AKILESH S' },
      { roll: '21CSL256', name: 'DANEESH. M' },
      { roll: '21CSL257', name: 'DHARSHAN P' },
      { roll: '21CSL259', name: 'INDRA B' },
      { roll: '21CSL260', name: 'KANISHKAR B' },
      { roll: '21CSL261', name: 'KANISHK P' },
      { roll: '21CSL262', name: 'KIRUTHIKA R' },
      { roll: '21CSR065', name: 'INIKA.N' },
      { roll: '21CSR066', name: 'JAI SHRUTHIE S M' },
      { roll: '21CSR067', name: 'JAYANTH J R' },
      { roll: '21CSR068', name: 'JAYAVARSHINI S' },
      { roll: '21CSR069', name: 'JEEVASREE G' },
      { roll: '21CSR070', name: 'JEGAN S' },
      { roll: '21CSR071', name: 'JESSICA S' },
      { roll: '21CSR072', name: 'KALAISELVAN K' },
      { roll: '21CSR073', name: 'KALAIVANI B' },
      { roll: '21CSR074', name: 'KALPANADEVI G' },
      { roll: '21CSR075', name: 'KAMALESH J' },
      { roll: '21CSR076', name: 'KANISHA A' },
      { roll: '21CSR077', name: 'KARAN M' },
      { roll: '21CSR078', name: 'KARTHICK P' },
      { roll: '21CSR079', name: 'S.KARTHIK' },
      { roll: '21CSR080', name: 'KARTHICKRAJAN S' },
      { roll: '21CSR081', name: 'KARTHIK RAJ E' },
      { roll: '21CSR082', name: 'KARTHIK S' },
      { roll: '21CSR083', name: 'KARTHIKA K' },
      { roll: '21CSR084', name: 'KAVIN B' },
      { roll: '21CSR085', name: 'KAVIN NISHANTHAN P D' },
      { roll: '21CSR086', name: 'KAVIN R' },
      { roll: '21CSR087', name: 'KAVIPRIYAN R K' },
      { roll: '21CSR088', name: 'KAVIYA K' },
      { roll: '21CSR089', name: 'KAVIYA P' },
      { roll: '21CSR090', name: 'KAVYA P' },
      { roll: '21CSR091', name: 'KAVYA S' },
      { roll: '21CSR092', name: 'KEERTHANA G' },
      { roll: '21CSR093', name: 'KEERTHANA DEVI S' },
      { roll: '21CSR094', name: 'KEERTHIBALA A T' },
      { roll: '21CSR095', name: 'KIRUTHIYAASHREE S P' },
      { roll: '21CSR096', name: 'KOWSIKA P' },
      { roll: '21CSR097', name: 'KRISHNA B' },
      { roll: '21CSR098', name: 'LINGESHWARAN S' },
      { roll: '21CSR099', name: 'LOKESH A' },
      { roll: '21CSR100', name: 'MADHAVAN R' },
      { roll: '21CSR101', name: 'MADHU BALAJI V S' },
      { roll: '21CSR102', name: 'MADHUCHERAN R' },
      { roll: '21CSR103', name: 'MADHUMITA C' },
      { roll: '21CSR104', name: 'MADHURAJYOTHI VK' },
      { roll: '21CSR105', name: 'MAHAPRABU S' },
      { roll: '21CSR106', name: 'MALARVIZHI V' },
      { roll: '21CSR107', name: 'MALATHI S' },
      { roll: '21CSR108', name: 'MANIPRABHA S' },
      { roll: '21CSR109', name: 'MANO SUNDAR M' },
      { roll: '21CSR110', name: 'MATHAN KUMAR A' },
      { roll: '21CSR111', name: 'MOHAMMED YUNUS M' },
      { roll: '21CSR112', name: 'MOHANRAJ C M' },
      { roll: '21CSR113', name: 'MOHIT K S' },
      { roll: '21CSR114', name: 'MONISH M M' },
      { roll: '21CSR115', name: 'MOUNISH N' },
      { roll: '21CSR116', name: 'MRUDHULA SHRI M' },
      { roll: '21CSR117', name: 'MUGHIL J' },
      { roll: '21CSR118', name: 'Mukhil Kumaran S' },
      { roll: '21CSR119', name: 'MURUGANANTHAM T' },
      { roll: '21CSR120', name: 'MUTHU KARUPPAN P' },
      { roll: '21CSR121', name: 'MYTHILI S' },
      { roll: '21CSR122', name: 'NAHUL ATHITHYA M' },
      { roll: '21CSR123', name: 'NANDHINI K' },
      { roll: '21CSR124', name: 'NAVEEN KRISHNA KR' },
      { roll: '21CSR125', name: 'NEKELASH I L' }
    ]
  };

  const validRollNumbers = studentsData.students.filter((student) => {
    // Check if the student's roll number matches the entered roll numbers
    return enteredRollNumbers.some((enteredRoll) => {
      // If entered roll number has 2 digits, pad it with leading zeros
      if (enteredRoll.length === 2) {
        enteredRoll = enteredRoll.padStart(3, '0');
      }
      // Compare last 3 digits
      return student.roll.substr(-3) === enteredRoll;
    });
  });

  const studentNamesElement = document.getElementById('studentNames');
  studentNamesElement.innerHTML = '';

  if (validRollNumbers.length > 0) {
    validRollNumbers.forEach((student, index) => {
      const studentInfo = document.createElement('p');
      studentInfo.textContent = `${index + 1}. ${student.roll} : ${student.name}`;
      studentNamesElement.appendChild(studentInfo);
    });
    document.getElementById('copyButton').style.display = 'block'; // Show the copy button
  } else {
    studentNamesElement.textContent = 'No matching students found.';
    document.getElementById('copyButton').style.display = 'block'; // Hide the copy button
  }
}

function copyStudentList() {
  const studentList = document.getElementById('studentNames').textContent;
  const textArea = document.createElement('textarea');
  textArea.value = studentList;

  // Append the textarea element to the body
  document.body.appendChild(textArea);

  // Select the text within the textarea
  textArea.select();

  // Copy the selected text
  document.execCommand('copy');

  // Remove the textarea element
  document.body.removeChild(textArea);

  // Notify the user that the list has been copied (you can customize this message)
  alert('List copied to clipboard!');
}
