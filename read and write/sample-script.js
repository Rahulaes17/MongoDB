//use collegeDB

db.teachers.insertMany([
{
  _id: ObjectId("507f1f77bcf86cd799439011"),
  name: "Dr. Kumar",
  subject: "MongoDB",
  experience: 5
},
{
  _id: ObjectId("507f1f77bcf86cd799439012"),
  name: "Prof. Sharma",
  subject: "Node.js",
  experience: 8
},
{
  _id: ObjectId("507f1f77bcf86cd799439013"),
  name: "Ms. Patel",
  subject: "Express",
  experience: 3
}
])

db.students.insertMany([
{
  name: "Ali",
  age: 22,
  course: "MongoDB",
  enrolled: true,
  teacherId: ObjectId("507f1f77bcf86cd799439011"),
  grades: [85, 90, 88]
},
{
  name: "Sara",
  age: 20,
  course: "Node.js",
  enrolled: true,
  teacherId: ObjectId("507f1f77bcf86cd799439012"),
  grades: [92, 88, 95]
},
{
  name: "Ahmed",
  age: 24,
  course: "Express",
  enrolled: true,
  teacherId: ObjectId("507f1f77bcf86cd799439013"),
  grades: [78, 82, 85]
},
{
  name: "Fatima",
  age: 21,
  course: "MongoDB",
  enrolled: true,
  teacherId: ObjectId("507f1f77bcf86cd799439011"),
  grades: [95, 93, 97]
},
{
  name: "Ravi",
  age: 23,
  course: "Node.js",
  enrolled: false,
  teacherId: ObjectId("507f1f77bcf86cd799439012"),
  grades: [70, 75, 72]
},
{
  name: "Priya",
  age: 19,
  course: "MongoDB",
  enrolled: true,
  teacherId: ObjectId("507f1f77bcf86cd799439011"),
  grades: [88, 91, 89]
},
{
  name: "Kabir",
  age: 20,
  course: "Node.js",
  enrolled: true,
  teacherId: ObjectId("507f1f77bcf86cd799439012"),
  grades: [84, 87, 86]
},
{
  name: "Zara",
  age: 22,
  course: "Express",
  enrolled: true,
  teacherId: ObjectId("507f1f77bcf86cd799439013"),
  grades: [90, 92, 94]
}
])

db.students.findOne({ name: "Ali" })

db.students.find({ course: "MongoDB" })

db.students.find({ age: { $gt: 21 } })

db.students.find({ age: { $gte: 18, $lte: 25 } })

db.students.find({ enrolled: { $ne: true } })

db.students.find({ course: { $in: ["MongoDB", "Node.js"] } })

db.students.find({
  $or: [
    { course: "Python" },
    { age: { $lt: 20 } }
  ]
})

db.students.find({
  age: { $gt: 20 },
  enrolled: true
})

db.students.find({
  course: { $not: { $eq: "Node.js" } }
})

db.students.find({ grades: 95 })

db.students.find({ grades: { $all: [90, 95] } })

db.students.find({ grades: { $size: 3 } })

db.students.find({
  $expr: { $gt: [{ $avg: "$grades" }, 85] }
})

db.students.find().sort({ age: -1 })

db.students.find().sort({ course: 1, age: -1 })

db.students.find().limit(3)

db.students.find().skip(2).limit(3)

db.students.find({
  course: "MongoDB"
}).limit(3)

db.students.countDocuments({ course: "MongoDB" })

db.students.countDocuments({ enrolled: true })

db.students.updateOne(
  { name: "Ali" },
  { $set: { course: "Advanced MongoDB" } }
)

db.students.updateMany(
  { enrolled: true },
  { $inc: { age: 1 } }
)

db.students.updateOne(
  { name: "Sara" },
  { $push: { grades: 96 } }
)

db.students.updateOne(
  { name: "Ravi" },
  { $unset: { enrolled: "" } }
)

db.teachers.updateOne(
  { name: "Dr. Kumar" },
  { $inc: { experience: 1 } }
)

db.teachers.updateOne(
  { _id: ObjectId("507f1f77bcf86cd799439011") },
  { $set: { office: "Room 301" } }
)

db.students.updateMany(
  { course: "Express" },
  {
    $set: {
      teacherId: ObjectId("507f1f77bcf86cd799439012"),
      course: "Advanced Express"
    }
  }
)

db.students.deleteOne({ name: "Kabir" })

db.students.deleteMany({ enrolled: false })

db.students.deleteMany({
  $expr: { $lt: [{ $avg: "$grades" }, 75] }
})

db.students.insertOne({
  name: "Vikram",
  age: 23,
  course: "Node.js",
  enrolled: true,
  teacherId: ObjectId("507f1f77bcf86cd799439012"),
  grades: [78, 84, 88]
})

db.students.updateOne(
  { name: "Vikram" },
  { $push: { grades: 92 } }
)

db.students.updateOne(
  { name: "Vikram" },
  { $inc: { age: 1 } }
)

db.students.find({
  course: { $in: ["Node.js", "MongoDB"] },
  age: { $gte: 22 }
}).sort({ age: -1 })

db.teachers.updateOne(
  { _id: ObjectId("507f1f77bcf86cd799439012") },
  { $inc: { experience: 2 } }
)

db.students.countDocuments({
  grades: { $size: 4 }
})

db.students.deleteMany({
  $expr: { $lt: [{ $avg: "$grades" }, 80] }
})

db.students.deleteOne({ name: "Vikram" })