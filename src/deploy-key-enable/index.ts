// https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/deploy_key_enable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeployKeyEnableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Can deploy key push to the project's repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/deploy_key_enable#can_push DeployKeyEnable#can_push}
  */
  readonly canPush?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/deploy_key_enable#id DeployKeyEnable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Deploy key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/deploy_key_enable#key DeployKeyEnable#key}
  */
  readonly key?: string;
  /**
  * The Gitlab key id for the pre-existing deploy key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/deploy_key_enable#key_id DeployKeyEnable#key_id}
  */
  readonly keyId: string;
  /**
  * The name or id of the project to add the deploy key to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/deploy_key_enable#project DeployKeyEnable#project}
  */
  readonly project: string;
  /**
  * Deploy key's title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/deploy_key_enable#title DeployKeyEnable#title}
  */
  readonly title?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/deploy_key_enable gitlab_deploy_key_enable}
*/
export class DeployKeyEnable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_deploy_key_enable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeployKeyEnable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeployKeyEnable to import
  * @param importFromId The id of the existing DeployKeyEnable that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/deploy_key_enable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeployKeyEnable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_deploy_key_enable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.10.0/docs/resources/deploy_key_enable gitlab_deploy_key_enable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeployKeyEnableConfig
  */
  public constructor(scope: Construct, id: string, config: DeployKeyEnableConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_deploy_key_enable',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '16.10.0',
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
    this._canPush = config.canPush;
    this._id = config.id;
    this._key = config.key;
    this._keyId = config.keyId;
    this._project = config.project;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_push - computed: false, optional: true, required: false
  private _canPush?: boolean | cdktf.IResolvable; 
  public get canPush() {
    return this.getBooleanAttribute('can_push');
  }
  public set canPush(value: boolean | cdktf.IResolvable) {
    this._canPush = value;
  }
  public resetCanPush() {
    this._canPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canPushInput() {
    return this._canPush;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      can_push: cdktf.booleanToTerraform(this._canPush),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      key_id: cdktf.stringToTerraform(this._keyId),
      project: cdktf.stringToTerraform(this._project),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_push: {
        value: cdktf.booleanToHclTerraform(this._canPush),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
