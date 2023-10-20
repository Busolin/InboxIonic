import { Component } from '@angular/core';

export interface Email {
  id: number;
  avatar: string;
  title: string;
  description: string;
  date: string;
  alreadyOpen: boolean;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  emails: Email[] | null = [
    {
      id: 1,
      avatar: 'https://source.unsplash.com/random',
      title: 'New Project Announcement',
      description:
        'We are excited to announce a new project that will revolutionize our industry. Stay tuned for updates!',
      date: '10:30',
      alreadyOpen: true,
    },
    {
      id: 2,
      avatar: 'https://source.unsplash.com/random',
      title: 'Weekly Newsletter',
      description:
        "Catch up on the latest news, updates, and stories from our team in this week's newsletter.",
      date: '10:30',
      alreadyOpen: false,
    },
    {
      id: 3,
      avatar: 'https://source.unsplash.com/random',
      title: 'Invitation to our Annual Event',
      description:
        'You are cordially invited to our annual event on Saturday. Please RSVP by Friday.',
      date: '10:30',
      alreadyOpen: true,
    },
    {
      id: 4,
      avatar: 'https://source.unsplash.com/random',
      title: 'Feedback Request',
      description:
        'We value your opinion! Please take a moment to share your feedback on our services.',
      date: '10:30',
      alreadyOpen: false,
    },
    {
      id: 5,
      avatar: 'https://source.unsplash.com/random',
      title: 'Important Meeting Tomorrow',
      description:
        'A reminder that we have an important meeting scheduled for tomorrow at 2 PM. Please attend.',
      date: '10:30',
      alreadyOpen: true,
    },
    {
      id: 6,
      avatar: 'https://source.unsplash.com/random',
      title: 'New Job Opportunity',
      description:
        'Exciting job opportunity! We have an open position for a talented individual. Apply now.',
      date: '10:30',
      alreadyOpen: false,
    },
    {
      id: 7,
      avatar: 'https://source.unsplash.com/random',
      title: 'Holiday Notice',
      description:
        'The office will be closed next week for the holiday. Enjoy your time off!',
      date: '10:30',
      alreadyOpen: true,
    },
    {
      id: 8,
      avatar: 'https://source.unsplash.com/random',
      title: 'Product Launch Event',
      description:
        'Join us for the grand launch of our latest product. It promises to be amazing!',
      date: '10:30',
      alreadyOpen: false,
    },
    {
      id: 9,
      avatar: 'https://source.unsplash.com/random',
      title: 'Reminder: Project Deadline',
      description:
        "Don't forget, the project deadline is approaching. Let's work together to meet our goals.",
      date: '10:30',
      alreadyOpen: true,
    },
    {
      id: 10,
      avatar: 'https://source.unsplash.com/random',
      title: 'Happy Birthday!',
      description:
        'Wishing you a fantastic birthday filled with joy and happiness!',
      date: '10:30',
      alreadyOpen: false,
    },
  ];

  constructor() {}
}
