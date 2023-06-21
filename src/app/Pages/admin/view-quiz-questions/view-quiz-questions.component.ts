import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent {
  qId: any;
  qTitle: any;
  questions = [
    {
      "content":'',
      "option1":'',
      "option2":'',
      "option3":'',
      "option4":'',
      "answer":'',
      "quesId":''

    }
  ];

  constructor(
    private _route: ActivatedRoute,
    private _question: QuestionService,
    private _snak: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data: any) => {
        console.log(data);
        this.questions = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  //delete quesion
  deleteQuestion(qid: any) {
    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      title: 'Are you sure , want to delete this question?',
    }).then((result: { isConfirmed: any; }) => {
      if (result.isConfirmed) {
        //confim
        this._question.deleteQuestion(qid).subscribe(
          (data: any) => {
            this._snak.open('Question Deleted ', '', {
              duration: 3000,
            });
             this.questions = this.questions.filter((q) => q.quesId != qid);
          },

          (error: any) => {
            this._snak.open('Error in deleting questions', '', {
              duration: 3000,
            });
            console.log(error);
          }
        );
      }
    });
  }
}
