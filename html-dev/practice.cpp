#include <bits/stdc++.h>
using namespace std;
#define ll long long
ll n,m,h;
void solve(){
    ll res=0,j=0;
    cin>>n>>m>>h;
    vector<ll>a1(n),a2(m);

    for(ll i=0;i<n;i++)cin>>a1[i];
    for(ll i=0;i<m;i++)cin>>a2[i];
    sort(a1.begin(),a1.end());
    sort(a2.begin(),a2.end());
    reverse(a1.begin(),a1.end());
    reverse(a2.begin(),a2.end());
    for(ll i=0;i<n;i++){
        if(j==m)break;
        res+=min(a2[j]*h,a1[i]);j++;
    }
    cout<<res<<'\n';
}
    

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(0);
    cout.tie(0);

    #ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
    #endif
    int tc;
    cin>>tc;
    while(tc--)
        solve();
    return 0;
}
