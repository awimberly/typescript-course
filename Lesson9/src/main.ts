// Utility Types

//Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
};

const updateAssignment = (assign: Assignment, propsToUpdate:Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate};
};

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

console.log(updateAssignment(assign1, {grade: 95}));
const assignGraded: Assignment = updateAssignment(assign1, {grade: 95});

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    //send to datababse etc.

    return assign;
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}

recordAssignment({...assignGraded, verified: true});


// Record
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00ff00",
    blue: "0000FF",
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: {assign1: 85, assign2: 93},
    Kelly: {assign1: 76, assign2: 15},
}


// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85,
}

type AssignPreview = Omit<Assignment, "grade" | "verified">
const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Project"
}

type newAssign = {title: string, points: number}
const createNewAssign = (title: string, points: number): newAssign => {
    return {title, points};
}

