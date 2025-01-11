// https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/member_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MemberRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The base access level for the custom role. Valid values are: `DEVELOPER`, `GUEST`, `MAINTAINER`, `MINIMAL_ACCESS`, `OWNER`, `REPORTER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/member_role#base_access_level MemberRole#base_access_level}
  */
  readonly baseAccessLevel: string;
  /**
  * Description for the member role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/member_role#description MemberRole#description}
  */
  readonly description?: string;
  /**
  * All permissions enabled for the custom role. Valid values are: `ADMIN_CICD_VARIABLES`, `ADMIN_COMPLIANCE_FRAMEWORK`, `ADMIN_GROUP_MEMBER`, `ADMIN_INTEGRATIONS`, `ADMIN_MERGE_REQUEST`, `ADMIN_PUSH_RULES`, `ADMIN_RUNNERS`, `ADMIN_TERRAFORM_STATE`, `ADMIN_VULNERABILITY`, `ADMIN_WEB_HOOK`, `ARCHIVE_PROJECT`, `MANAGE_DEPLOY_TOKENS`, `MANAGE_GROUP_ACCESS_TOKENS`, `MANAGE_MERGE_REQUEST_SETTINGS`, `MANAGE_PROJECT_ACCESS_TOKENS`, `MANAGE_SECURITY_POLICY_LINK`, `READ_CODE`, `READ_CRM_CONTACT`, `READ_DEPENDENCY`, `READ_RUNNERS`, `READ_VULNERABILITY`, `REMOVE_GROUP`, `REMOVE_PROJECT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/member_role#enabled_permissions MemberRole#enabled_permissions}
  */
  readonly enabledPermissions: string[];
  /**
  * Full path of the namespace to create the member role in. **Required for SAAS** **Not allowed for self-managed**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/member_role#group_path MemberRole#group_path}
  */
  readonly groupPath?: string;
  /**
  * Name for the member role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/member_role#name MemberRole#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/member_role gitlab_member_role}
*/
export class MemberRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_member_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MemberRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MemberRole to import
  * @param importFromId The id of the existing MemberRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/member_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MemberRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gitlab_member_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/member_role gitlab_member_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MemberRoleConfig
  */
  public constructor(scope: Construct, id: string, config: MemberRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_member_role',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '17.7.1',
        providerVersionConstraint: '~> 17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseAccessLevel = config.baseAccessLevel;
    this._description = config.description;
    this._enabledPermissions = config.enabledPermissions;
    this._groupPath = config.groupPath;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_access_level - computed: false, optional: false, required: true
  private _baseAccessLevel?: string; 
  public get baseAccessLevel() {
    return this.getStringAttribute('base_access_level');
  }
  public set baseAccessLevel(value: string) {
    this._baseAccessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseAccessLevelInput() {
    return this._baseAccessLevel;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // edit_path - computed: true, optional: false, required: false
  public get editPath() {
    return this.getStringAttribute('edit_path');
  }

  // enabled_permissions - computed: false, optional: false, required: true
  private _enabledPermissions?: string[]; 
  public get enabledPermissions() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_permissions'));
  }
  public set enabledPermissions(value: string[]) {
    this._enabledPermissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledPermissionsInput() {
    return this._enabledPermissions;
  }

  // group_path - computed: true, optional: true, required: false
  private _groupPath?: string; 
  public get groupPath() {
    return this.getStringAttribute('group_path');
  }
  public set groupPath(value: string) {
    this._groupPath = value;
  }
  public resetGroupPath() {
    this._groupPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPathInput() {
    return this._groupPath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iid - computed: true, optional: false, required: false
  public get iid() {
    return this.getNumberAttribute('iid');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_access_level: cdktf.stringToTerraform(this._baseAccessLevel),
      description: cdktf.stringToTerraform(this._description),
      enabled_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledPermissions),
      group_path: cdktf.stringToTerraform(this._groupPath),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_access_level: {
        value: cdktf.stringToHclTerraform(this._baseAccessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledPermissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      group_path: {
        value: cdktf.stringToHclTerraform(this._groupPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
