package conference.hotel.services;

import java.util.Collection;

import Conference.hotel.entity.Reservation;
import Conference.hotel.temp.CurrentReservation;

//Service Pattern for Reservation
public interface ReservationService {

	public Reservation getReservationForLoggedUserById(int resId);

	public Collection<Reservation> getReservationsForLoggedUser();

	public void saveOrUpdateReservation(CurrentReservation currentReservation);

	public void deleteReservation(int resId);

	public CurrentReservation reservationToCurrentReservationById(int resId);

}
