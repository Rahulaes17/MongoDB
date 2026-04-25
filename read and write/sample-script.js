db.teachers.insertMany([
{
 _id: ObjectId("507f1f77bcf86cd799439011"),
 name: 'Dr. Kumar',
 subject: 'MongoDB',
 experience: 5
},
{
 _id: ObjectId("507f1f77bcf86cd799439012"),
 name: 'Prof. Sharma',
 subject: 'Node.js',
 experience: 8
},
{
 _id: ObjectId("507f1f77bcf86cd799439013"),
 name: 'Ms. Patel',
 subject: 'Express',
 experience: 3
}
])
// Insert sample students with teacher references
db.students.insertMany([
{
 name: 'Ali',
 age: 22,
 course: 'MongoDB',
 enrolled: true,
 teacherId: ObjectId("507f1f77bcf86cd799439011"),
 grades: [85, 90, 88]
},
{
 name: 'Sara',
 age: 20,
 course: 'Node.js',
 enrolled: true,
 teacherId: ObjectId("507f1f77bcf86cd799439012"),
 grades: [92, 88, 95]
},
{
 name: 'Ahmed',
 age: 24,
 course: 'Express',
 enrolled: true,
 teacherId: ObjectId("507f1f77bcf86cd799439013"),
 grades: [78, 82, 85]
},
{
 name: 'Fatima',
 age: 21,
 course: 'MongoDB',
 enrolled: true,
 teacherId: ObjectId("507f1f77bcf86cd799439011"),
 grades: [95, 93, 97]
},
{
 name: 'Ravi',
 age: 23,
 course: 'Node.js',
 enrolled: false,
 teacherId: ObjectId("507f1f77bcf86cd799439012"),
 grades: [70, 75, 72]
}
])

db.students.insertOne({
 name: 'Priya',
 age: 19,
 course: 'MongoDB',
 enrolled: true,
 teacherId: ObjectId("507f1f77bcf86cd799439011"),
 grades: [88, 91, 89]
})


db.students.insertMany([
{
 name: 'Kabir',
 age: 20,
 course: 'Node.js',
 enrolled: true,
 teacherId: ObjectId("507f1f77bcf86cd799439012"),
 grades: [84, 87, 86]
},
{
 name: 'Zara',
 age: 22,
 course: 'Express',
 enrolled: true,
 teacherId: ObjectId("507f1f77bcf86cd799439013"),
 grades: [90, 92, 94]
}
])

db.students.findOne({ name: 'Ali' })

db.students.find({ course: 'MongoDB' })



//update

db.students.updateOne(
{ name: 'Ali' },
{ $set: { course: 'Advanced MongoDB' } }
)

// Add 1 year to age of all enrolled students
db.students.updateMany(
    { enrolled: true },
{ $inc: { age: 1 } }
)


// Add a new grade to Sara's grades array
db.students.updateOne(
{ name: 'Sara' },
{ $push: { grades: 96 } }
)
// Remove enrolled field from Ravi
db.students.updateOne(
{ name: 'Ravi' },
{ $unset: { enrolled: "" } }
)
// Increment teacher's experience by 1
db.teachers.updateOne(
{ name: 'Dr. Kumar' },
{ $inc: { experience: 1 } }
)

// Delete a specific student
db.students.deleteOne({ name: 'Kabir' })

// Delete all students who are not enrolled
db.students.deleteMany({ enrolled: false })
// Delete all students with low average grades
db.students.deleteMany({
 $expr: {
 $lt: [{ $avg: "$grades" }, 75]
}
})


// Find a student by _id
db.students.findOne({
 _id: ObjectId("64bd2e183dd4e6402f10388f")
})
// Update a teacher by _id
db.teachers.updateOne(
{ _id: ObjectId("507f1f77bcf86cd799439011") },
{ $set: { office: "Room 301" } }
)

// Move all Express students to a different teacher
db.students.updateMany(
{ course: 'Express' },
{ $set: {
 teacherId: ObjectId("507f1f77bcf86cd799439012"),
 course: 'Advanced Express'
}}
)


db.students.find({ age: { $gt: 21 } })

db.students.find({ age: { $gte: 18, $lte: 25 } })

db.teachers.find({ experience: { $gt: 5 } })

db.students.find({ enrolled: { $ne: true } })

db.students.find({ course: { $in: ['MongoDB', 'Node.js'] } })

db.students.find({
  $or: [
{ course: 'Python' },
{ age: { $lt: 20 } }
]
})

db.students.find({
  age: { $gt: 20 },
  enrolled: true
})

db.students.find({
  course: { $not: { $eq: 'Node.js' } }
})

db.students.find({ grades: 95 })

db.students.find({
  grades: { $all: [90, 95] }
})

db.students.find({
  grades: { $size: 3 }
})

db.students.find({
  $expr: {
    $gt: [{ $avg: "$grades" }, 85]
}
})

db.students.find().sort({ age:-1 })

db.students.find().sort({ course: 1, age:-1 })

db.students.find().limit(3)

db.students.find().skip(2).limit(3)

db.students.find({
  course: 'MongoDB'
}).sort({
  grades:-1
}).limit(3)

db.students.countDocuments({ course: 'MongoDB' })

db.students.countDocuments({ enrolled: true })



// Insert one new student
db.students.insertOne({
  name: "Neha",
  age: 21,
  course: "Node.js",
  enrolled: true,
  teacherId: ObjectId("507f1f77bcf86cd799439012"),
  grades: [89, 91, 90]
})

// Find all enrolled students
db.students.find({ enrolled: true })

// Find students age greater than 20
db.students.find({ age: { $gt: 20 } })

// Update Neha's age
db.students.updateOne(
  { name: "Neha" },
  { $set: { age: 22 } }
)

// Add one grade to Neha
db.students.updateOne(
  { name: "Neha" },
  { $push: { grades: 95 } }
)

// Increase experience of Prof. Sharma
db.teachers.updateOne(
  { name: "Prof. Sharma" },
  { $inc: { experience: 1 } }
)

// Sort students by age descending
db.students.find().sort({ age: -1 })

// Count Node.js students
db.students.countDocuments({ course: "Node.js" })

// Delete Neha
db.students.deleteOne({ name: "Neha" })

db.students.insertOne({
  name: "Meera",
  age: 20,
  course: "Express",
  enrolled: true,
  teacherId: ObjectId("507f1f77bcf86cd799439013"),
  grades: [86, 89, 91]
})

db.students.find({ course: "Express" })

db.students.updateOne(
  { name: "Meera" },
  { $push: { grades: 95 } }
)

db.students.updateOne(
  { name: "Meera" },
  { $set: { enrolled: false } }
)

db.students.find({
  grades: { $size: 4 }
})

db.students.find().sort({ name: 1 })

db.students.countDocuments({ enrolled: false })

db.students.deleteOne({ name: "Meera" })


