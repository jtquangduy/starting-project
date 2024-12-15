import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  close = output();
  detailsVisiable = signal(false);

  onToggleDetails() {
    // this.detailsVisiable.set(!this.detailsVisiable());
    this.detailsVisiable.update((wasVisiable) => !wasVisiable);
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
