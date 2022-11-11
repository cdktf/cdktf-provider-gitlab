// https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupLdapLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Minimum access level for members of the LDAP group. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#access_level GroupLdapLink#access_level}
  */
  readonly accessLevel?: string;
  /**
  * The CN of the LDAP group to link with.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#cn GroupLdapLink#cn}
  */
  readonly cn: string;
  /**
  * If true, then delete and replace an existing LDAP link if one exists.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#force GroupLdapLink#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Minimum access level for members of the LDAP group. Valid values are: `no one`, `minimal`, `guest`, `reporter`, `developer`, `maintainer`, `owner`, `master`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#group_access GroupLdapLink#group_access}
  */
  readonly groupAccess?: string;
  /**
  * The id of the GitLab group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#group_id GroupLdapLink#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#id GroupLdapLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the LDAP provider as stored in the GitLab database. Note that this is NOT the value of the `label` attribute as shown in the web UI. In most cases this will be `ldapmain` but you may use the [LDAP check rake task](https://docs.gitlab.com/ee/administration/raketasks/ldap.html#check) for receiving the LDAP server name: `LDAP: ... Server: ldapmain`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link#ldap_provider GroupLdapLink#ldap_provider}
  */
  readonly ldapProvider: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link gitlab_group_ldap_link}
*/
export class GroupLdapLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_group_ldap_link";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/group_ldap_link gitlab_group_ldap_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupLdapLinkConfig
  */
  public constructor(scope: Construct, id: string, config: GroupLdapLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_group_ldap_link',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '3.19.0',
        providerVersionConstraint: '~> 3.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLevel = config.accessLevel;
    this._cn = config.cn;
    this._force = config.force;
    this._groupAccess = config.groupAccess;
    this._groupId = config.groupId;
    this._id = config.id;
    this._ldapProvider = config.ldapProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // cn - computed: false, optional: false, required: true
  private _cn?: string; 
  public get cn() {
    return this.getStringAttribute('cn');
  }
  public set cn(value: string) {
    this._cn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnInput() {
    return this._cn;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // group_access - computed: false, optional: true, required: false
  private _groupAccess?: string; 
  public get groupAccess() {
    return this.getStringAttribute('group_access');
  }
  public set groupAccess(value: string) {
    this._groupAccess = value;
  }
  public resetGroupAccess() {
    this._groupAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAccessInput() {
    return this._groupAccess;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // ldap_provider - computed: false, optional: false, required: true
  private _ldapProvider?: string; 
  public get ldapProvider() {
    return this.getStringAttribute('ldap_provider');
  }
  public set ldapProvider(value: string) {
    this._ldapProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapProviderInput() {
    return this._ldapProvider;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      cn: cdktf.stringToTerraform(this._cn),
      force: cdktf.booleanToTerraform(this._force),
      group_access: cdktf.stringToTerraform(this._groupAccess),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      ldap_provider: cdktf.stringToTerraform(this._ldapProvider),
    };
  }
}
