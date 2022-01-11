import { withSessionRoute } from '@/lib/session';
import Availability, { AvailabilityRecord } from '@/models/Availability';

export default withSessionRoute(async (req, res) => {
  if (
    typeof req.body?.gearId !== 'string' ||
    typeof req.body?.property !== 'string' ||
    typeof req.body?.value !== 'number'
  ) {
    // Invalid request
    return res.status(400).json({});
  }

  const athleteId = req.session.athleteId;
  if (athleteId !== process.env.STRAVA_ADMIN_ID) {
    // Unauthorized
    return res.status(401).json({});
  }

  const availability = await Availability.findOne({});

  // Save data submitted by user
  await Availability.save({
    ...availability,
    [req.body?.property as keyof AvailabilityRecord]: req.body?.value,
  });

  res.status(200).json({});
});
