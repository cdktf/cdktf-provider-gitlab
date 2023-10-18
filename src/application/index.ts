// https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application is used where the client secret can be kept confidential. Native mobile apps and Single Page Apps are considered non-confidential. Defaults to true if not supplied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/application#confidential Application#confidential}
  */
  readonly confidential?: boolean | cdktf.IResolvable;
  /**
  * Name of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * The URL gitlab should send the user to after authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/application#redirect_url Application#redirect_url}
  */
  readonly redirectUrl: string;
  /**
  * 
  * 					Scopes of the application. Use "openid" if you plan to use this as an oidc authentication application. Valid options are: `api`, `read_api`, `read_user`, `read_repository`, `write_repository`, `read_registry`, `write_registry`, `sudo`, `admin_mode`, `openid`, `profile`, `email`.
  * This is only populated when creating a new application. This attribute is not available for imported resources
  * 					
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/application#scopes Application#scopes}
  */
  readonly scopes: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/application gitlab_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/application gitlab_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_application',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.4.1',
        providerVersionConstraint: '~> 16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._confidential = config.confidential;
    this._name = config.name;
    this._redirectUrl = config.redirectUrl;
    this._scopes = config.scopes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // confidential - computed: true, optional: true, required: false
  private _confidential?: boolean | cdktf.IResolvable; 
  public get confidential() {
    return this.getBooleanAttribute('confidential');
  }
  public set confidential(value: boolean | cdktf.IResolvable) {
    this._confidential = value;
  }
  public resetConfidential() {
    this._confidential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInput() {
    return this._confidential;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // redirect_url - computed: false, optional: false, required: true
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      confidential: cdktf.booleanToTerraform(this._confidential),
      name: cdktf.stringToTerraform(this._name),
      redirect_url: cdktf.stringToTerraform(this._redirectUrl),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
    };
  }
}
