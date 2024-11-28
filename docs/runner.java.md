# `runner` Submodule <a name="`runner` Submodule" id="@cdktf/provider-gitlab.runner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Runner <a name="Runner" id="@cdktf/provider-gitlab.runner.Runner"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner gitlab_runner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.runner.Runner.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.runner.Runner;

Runner.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .registrationToken(java.lang.String)
//  .accessLevel(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .locked(java.lang.Boolean)
//  .locked(IResolvable)
//  .maintenanceNote(java.lang.String)
//  .maximumTimeout(java.lang.Number)
//  .paused(java.lang.Boolean)
//  .paused(IResolvable)
//  .runUntagged(java.lang.Boolean)
//  .runUntagged(IResolvable)
//  .tagList(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.registrationToken">registrationToken</a></code> | <code>java.lang.String</code> | The registration token used to register the runner. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | The access_level of the runner. Valid values are: `not_protected`, `ref_protected`. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The runner's description. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#id Runner#id}. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.locked">locked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the runner should be locked for current project. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.maintenanceNote">maintenanceNote</a></code> | <code>java.lang.String</code> | Free-form maintenance notes for the runner (1024 characters). |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.maximumTimeout">maximumTimeout</a></code> | <code>java.lang.Number</code> | Maximum timeout set when this runner handles the job. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the runner should ignore new jobs. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.runUntagged">runUntagged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the runner should handle untagged jobs. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.tagList">tagList</a></code> | <code>java.util.List<java.lang.String></code> | List of runner’s tags. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `registrationToken`<sup>Required</sup> <a name="registrationToken" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.registrationToken"></a>

- *Type:* java.lang.String

The registration token used to register the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#registration_token Runner#registration_token}

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.accessLevel"></a>

- *Type:* java.lang.String

The access_level of the runner. Valid values are: `not_protected`, `ref_protected`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#access_level Runner#access_level}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The runner's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#description Runner#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#id Runner#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.locked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the runner should be locked for current project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#locked Runner#locked}

---

##### `maintenanceNote`<sup>Optional</sup> <a name="maintenanceNote" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.maintenanceNote"></a>

- *Type:* java.lang.String

Free-form maintenance notes for the runner (1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#maintenance_note Runner#maintenance_note}

---

##### `maximumTimeout`<sup>Optional</sup> <a name="maximumTimeout" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.maximumTimeout"></a>

- *Type:* java.lang.Number

Maximum timeout set when this runner handles the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#maximum_timeout Runner#maximum_timeout}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.paused"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the runner should ignore new jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#paused Runner#paused}

---

##### `runUntagged`<sup>Optional</sup> <a name="runUntagged" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.runUntagged"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the runner should handle untagged jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#run_untagged Runner#run_untagged}

---

##### `tagList`<sup>Optional</sup> <a name="tagList" id="@cdktf/provider-gitlab.runner.Runner.Initializer.parameter.tagList"></a>

- *Type:* java.util.List<java.lang.String>

List of runner’s tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#tag_list Runner#tag_list}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetLocked">resetLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetMaintenanceNote">resetMaintenanceNote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetMaximumTimeout">resetMaximumTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetPaused">resetPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetRunUntagged">resetRunUntagged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.resetTagList">resetTagList</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.runner.Runner.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.runner.Runner.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.runner.Runner.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.runner.Runner.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.runner.Runner.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.runner.Runner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.runner.Runner.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.runner.Runner.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.runner.Runner.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.runner.Runner.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.runner.Runner.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.runner.Runner.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.runner.Runner.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.runner.Runner.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.runner.Runner.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.runner.Runner.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.runner.Runner.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.runner.Runner.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.runner.Runner.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.runner.Runner.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.runner.Runner.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.runner.Runner.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.runner.Runner.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.runner.Runner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.runner.Runner.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.runner.Runner.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.runner.Runner.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.runner.Runner.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.runner.Runner.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.runner.Runner.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.runner.Runner.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-gitlab.runner.Runner.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-gitlab.runner.Runner.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-gitlab.runner.Runner.resetId"></a>

```java
public void resetId()
```

##### `resetLocked` <a name="resetLocked" id="@cdktf/provider-gitlab.runner.Runner.resetLocked"></a>

```java
public void resetLocked()
```

##### `resetMaintenanceNote` <a name="resetMaintenanceNote" id="@cdktf/provider-gitlab.runner.Runner.resetMaintenanceNote"></a>

```java
public void resetMaintenanceNote()
```

##### `resetMaximumTimeout` <a name="resetMaximumTimeout" id="@cdktf/provider-gitlab.runner.Runner.resetMaximumTimeout"></a>

```java
public void resetMaximumTimeout()
```

##### `resetPaused` <a name="resetPaused" id="@cdktf/provider-gitlab.runner.Runner.resetPaused"></a>

```java
public void resetPaused()
```

##### `resetRunUntagged` <a name="resetRunUntagged" id="@cdktf/provider-gitlab.runner.Runner.resetRunUntagged"></a>

```java
public void resetRunUntagged()
```

##### `resetTagList` <a name="resetTagList" id="@cdktf/provider-gitlab.runner.Runner.resetTagList"></a>

```java
public void resetTagList()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Runner resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.runner.Runner.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.runner.Runner;

Runner.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.runner.Runner.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.runner.Runner.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.runner.Runner;

Runner.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.runner.Runner.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.runner.Runner.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.runner.Runner;

Runner.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.runner.Runner.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.runner.Runner.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.runner.Runner;

Runner.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Runner.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Runner resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.runner.Runner.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.runner.Runner.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Runner to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.runner.Runner.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Runner that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.runner.Runner.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Runner to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.authenticationToken">authenticationToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.lockedInput">lockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.maintenanceNoteInput">maintenanceNoteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.maximumTimeoutInput">maximumTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.pausedInput">pausedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.registrationTokenInput">registrationTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.runUntaggedInput">runUntaggedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.tagListInput">tagListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.locked">locked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.maintenanceNote">maintenanceNote</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.maximumTimeout">maximumTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.registrationToken">registrationToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.runUntagged">runUntagged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.tagList">tagList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.runner.Runner.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.runner.Runner.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.runner.Runner.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.runner.Runner.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.runner.Runner.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.runner.Runner.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.runner.Runner.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.runner.Runner.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.runner.Runner.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.runner.Runner.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.runner.Runner.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.runner.Runner.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.runner.Runner.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.runner.Runner.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticationToken`<sup>Required</sup> <a name="authenticationToken" id="@cdktf/provider-gitlab.runner.Runner.property.authenticationToken"></a>

```java
public java.lang.String getAuthenticationToken();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-gitlab.runner.Runner.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-gitlab.runner.Runner.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.runner.Runner.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-gitlab.runner.Runner.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lockedInput`<sup>Optional</sup> <a name="lockedInput" id="@cdktf/provider-gitlab.runner.Runner.property.lockedInput"></a>

```java
public java.lang.Object getLockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maintenanceNoteInput`<sup>Optional</sup> <a name="maintenanceNoteInput" id="@cdktf/provider-gitlab.runner.Runner.property.maintenanceNoteInput"></a>

```java
public java.lang.String getMaintenanceNoteInput();
```

- *Type:* java.lang.String

---

##### `maximumTimeoutInput`<sup>Optional</sup> <a name="maximumTimeoutInput" id="@cdktf/provider-gitlab.runner.Runner.property.maximumTimeoutInput"></a>

```java
public java.lang.Number getMaximumTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `pausedInput`<sup>Optional</sup> <a name="pausedInput" id="@cdktf/provider-gitlab.runner.Runner.property.pausedInput"></a>

```java
public java.lang.Object getPausedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `registrationTokenInput`<sup>Optional</sup> <a name="registrationTokenInput" id="@cdktf/provider-gitlab.runner.Runner.property.registrationTokenInput"></a>

```java
public java.lang.String getRegistrationTokenInput();
```

- *Type:* java.lang.String

---

##### `runUntaggedInput`<sup>Optional</sup> <a name="runUntaggedInput" id="@cdktf/provider-gitlab.runner.Runner.property.runUntaggedInput"></a>

```java
public java.lang.Object getRunUntaggedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagListInput`<sup>Optional</sup> <a name="tagListInput" id="@cdktf/provider-gitlab.runner.Runner.property.tagListInput"></a>

```java
public java.util.List<java.lang.String> getTagListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.runner.Runner.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.runner.Runner.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.runner.Runner.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locked`<sup>Required</sup> <a name="locked" id="@cdktf/provider-gitlab.runner.Runner.property.locked"></a>

```java
public java.lang.Object getLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maintenanceNote`<sup>Required</sup> <a name="maintenanceNote" id="@cdktf/provider-gitlab.runner.Runner.property.maintenanceNote"></a>

```java
public java.lang.String getMaintenanceNote();
```

- *Type:* java.lang.String

---

##### `maximumTimeout`<sup>Required</sup> <a name="maximumTimeout" id="@cdktf/provider-gitlab.runner.Runner.property.maximumTimeout"></a>

```java
public java.lang.Number getMaximumTimeout();
```

- *Type:* java.lang.Number

---

##### `paused`<sup>Required</sup> <a name="paused" id="@cdktf/provider-gitlab.runner.Runner.property.paused"></a>

```java
public java.lang.Object getPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `registrationToken`<sup>Required</sup> <a name="registrationToken" id="@cdktf/provider-gitlab.runner.Runner.property.registrationToken"></a>

```java
public java.lang.String getRegistrationToken();
```

- *Type:* java.lang.String

---

##### `runUntagged`<sup>Required</sup> <a name="runUntagged" id="@cdktf/provider-gitlab.runner.Runner.property.runUntagged"></a>

```java
public java.lang.Object getRunUntagged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagList`<sup>Required</sup> <a name="tagList" id="@cdktf/provider-gitlab.runner.Runner.property.tagList"></a>

```java
public java.util.List<java.lang.String> getTagList();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.Runner.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.runner.Runner.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RunnerConfig <a name="RunnerConfig" id="@cdktf/provider-gitlab.runner.RunnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.runner.RunnerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.runner.RunnerConfig;

RunnerConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .registrationToken(java.lang.String)
//  .accessLevel(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .locked(java.lang.Boolean)
//  .locked(IResolvable)
//  .maintenanceNote(java.lang.String)
//  .maximumTimeout(java.lang.Number)
//  .paused(java.lang.Boolean)
//  .paused(IResolvable)
//  .runUntagged(java.lang.Boolean)
//  .runUntagged(IResolvable)
//  .tagList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.registrationToken">registrationToken</a></code> | <code>java.lang.String</code> | The registration token used to register the runner. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | The access_level of the runner. Valid values are: `not_protected`, `ref_protected`. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.description">description</a></code> | <code>java.lang.String</code> | The runner's description. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#id Runner#id}. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.locked">locked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the runner should be locked for current project. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.maintenanceNote">maintenanceNote</a></code> | <code>java.lang.String</code> | Free-form maintenance notes for the runner (1024 characters). |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.maximumTimeout">maximumTimeout</a></code> | <code>java.lang.Number</code> | Maximum timeout set when this runner handles the job. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.paused">paused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the runner should ignore new jobs. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.runUntagged">runUntagged</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the runner should handle untagged jobs. |
| <code><a href="#@cdktf/provider-gitlab.runner.RunnerConfig.property.tagList">tagList</a></code> | <code>java.util.List<java.lang.String></code> | List of runner’s tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `registrationToken`<sup>Required</sup> <a name="registrationToken" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.registrationToken"></a>

```java
public java.lang.String getRegistrationToken();
```

- *Type:* java.lang.String

The registration token used to register the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#registration_token Runner#registration_token}

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

The access_level of the runner. Valid values are: `not_protected`, `ref_protected`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#access_level Runner#access_level}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The runner's description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#description Runner#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#id Runner#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locked`<sup>Optional</sup> <a name="locked" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.locked"></a>

```java
public java.lang.Object getLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the runner should be locked for current project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#locked Runner#locked}

---

##### `maintenanceNote`<sup>Optional</sup> <a name="maintenanceNote" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.maintenanceNote"></a>

```java
public java.lang.String getMaintenanceNote();
```

- *Type:* java.lang.String

Free-form maintenance notes for the runner (1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#maintenance_note Runner#maintenance_note}

---

##### `maximumTimeout`<sup>Optional</sup> <a name="maximumTimeout" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.maximumTimeout"></a>

```java
public java.lang.Number getMaximumTimeout();
```

- *Type:* java.lang.Number

Maximum timeout set when this runner handles the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#maximum_timeout Runner#maximum_timeout}

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.paused"></a>

```java
public java.lang.Object getPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the runner should ignore new jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#paused Runner#paused}

---

##### `runUntagged`<sup>Optional</sup> <a name="runUntagged" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.runUntagged"></a>

```java
public java.lang.Object getRunUntagged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the runner should handle untagged jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#run_untagged Runner#run_untagged}

---

##### `tagList`<sup>Optional</sup> <a name="tagList" id="@cdktf/provider-gitlab.runner.RunnerConfig.property.tagList"></a>

```java
public java.util.List<java.lang.String> getTagList();
```

- *Type:* java.util.List<java.lang.String>

List of runner’s tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.6.1/docs/resources/runner#tag_list Runner#tag_list}

---



