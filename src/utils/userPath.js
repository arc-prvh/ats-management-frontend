function userPath(role) {
  const str = role.toUpperCase();

  switch (str) {
    case 'CANDIDATE':
      return '/candidateDashboard';

    case 'CLIENT':
      return '/clientDashboard';

    case 'AGENCY':
      return '/agencyDashboard';

    default:
      return '/';
  }
}

export default userPath;
