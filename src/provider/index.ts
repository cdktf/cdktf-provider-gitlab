// https://www.terraform.io/docs/providers/gitlab
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GitlabProviderConfig {
  /**
  * This is the target GitLab base API endpoint. Providing a value is a requirement when working with GitLab CE or GitLab Enterprise e.g. `https://my.gitlab.server/api/v4/`. It is optional to provide this value and it can also be sourced from the `GITLAB_BASE_URL` environment variable. The value must end with a slash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab#base_url GitlabProvider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * This is a file containing the ca cert to verify the gitlab instance. This is available for use when working with GitLab CE or Gitlab Enterprise with a locally-issued or self-signed certificate chain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab#cacert_file GitlabProvider#cacert_file}
  */
  readonly cacertFile?: string;
  /**
  * File path to client certificate when GitLab instance is behind company proxy. File must contain PEM encoded data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab#client_cert GitlabProvider#client_cert}
  */
  readonly clientCert?: string;
  /**
  * File path to client key when GitLab instance is behind company proxy. File must contain PEM encoded data. Required when `client_cert` is set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab#client_key GitlabProvider#client_key}
  */
  readonly clientKey?: string;
  /**
  * (Experimental) By default the provider does a dummy request to get the current user in order to verify that the provider configuration is correct and the GitLab API is reachable. Set this to `false` to skip this check. This may be useful if the GitLab instance does not yet exist and is created within the same terraform module. It may be sourced from the `GITLAB_EARLY_AUTH_CHECK`. This is an experimental feature and may change in the future. Please make sure to always keep backups of your state.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab#early_auth_check GitlabProvider#early_auth_check}
  */
  readonly earlyAuthCheck?: boolean | cdktf.IResolvable;
  /**
  * When set to true this disables SSL verification of the connection to the GitLab instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab#insecure GitlabProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The OAuth2 Token, Project, Group, Personal Access Token or CI Job Token used to connect to GitLab. The OAuth method is used in this provider for authentication (using Bearer authorization token). See https://docs.gitlab.com/ee/api/#authentication for details. It may be sourced from the `GITLAB_TOKEN` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab#token GitlabProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab#alias GitlabProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab gitlab}
*/
export class GitlabProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab gitlab} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GitlabProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GitlabProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gitlab',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '15.10.0',
        providerVersionConstraint: '~> 15.7'
      },
      terraformProviderSource: 'gitlabhq/gitlab'
    });
    this._baseUrl = config.baseUrl;
    this._cacertFile = config.cacertFile;
    this._clientCert = config.clientCert;
    this._clientKey = config.clientKey;
    this._earlyAuthCheck = config.earlyAuthCheck;
    this._insecure = config.insecure;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string | undefined) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // cacert_file - computed: false, optional: true, required: false
  private _cacertFile?: string; 
  public get cacertFile() {
    return this._cacertFile;
  }
  public set cacertFile(value: string | undefined) {
    this._cacertFile = value;
  }
  public resetCacertFile() {
    this._cacertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertFileInput() {
    return this._cacertFile;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this._clientCert;
  }
  public set clientCert(value: string | undefined) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this._clientKey;
  }
  public set clientKey(value: string | undefined) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // early_auth_check - computed: false, optional: true, required: false
  private _earlyAuthCheck?: boolean | cdktf.IResolvable; 
  public get earlyAuthCheck() {
    return this._earlyAuthCheck;
  }
  public set earlyAuthCheck(value: boolean | cdktf.IResolvable | undefined) {
    this._earlyAuthCheck = value;
  }
  public resetEarlyAuthCheck() {
    this._earlyAuthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get earlyAuthCheckInput() {
    return this._earlyAuthCheck;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_url: cdktf.stringToTerraform(this._baseUrl),
      cacert_file: cdktf.stringToTerraform(this._cacertFile),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      client_key: cdktf.stringToTerraform(this._clientKey),
      early_auth_check: cdktf.booleanToTerraform(this._earlyAuthCheck),
      insecure: cdktf.booleanToTerraform(this._insecure),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
