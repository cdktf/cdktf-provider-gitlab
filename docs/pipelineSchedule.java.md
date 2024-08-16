# `pipelineSchedule` Submodule <a name="`pipelineSchedule` Submodule" id="@cdktf/provider-gitlab.pipelineSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipelineSchedule <a name="PipelineSchedule" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/pipeline_schedule gitlab_pipeline_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.pipeline_schedule.PipelineSchedule;

PipelineSchedule.Builder.create(Construct scope, java.lang.String id)
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
    .cron(java.lang.String)
    .description(java.lang.String)
    .project(java.lang.String)
    .ref(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .cronTimezone(java.lang.String)
//  .takeOwnership(java.lang.Boolean)
//  .takeOwnership(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.cron">cron</a></code> | <code>java.lang.String</code> | The cron (e.g. `0 1 * * *`). |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the pipeline schedule. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The name or id of the project to add the schedule to. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.ref">ref</a></code> | <code>java.lang.String</code> | The branch/tag name to be triggered. This must be the full branch reference, for example: `refs/heads/main`, not `main`. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The activation of pipeline schedule. If false is set, the pipeline schedule will deactivated initially. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.cronTimezone">cronTimezone</a></code> | <code>java.lang.String</code> | The timezone. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.takeOwnership">takeOwnership</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to `true`, the user represented by the token running Terraform will take ownership of the scheduled pipeline prior to editing it. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.cron"></a>

- *Type:* java.lang.String

The cron (e.g. `0 1 * * *`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/pipeline_schedule#cron PipelineSchedule#cron}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the pipeline schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/pipeline_schedule#description PipelineSchedule#description}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The name or id of the project to add the schedule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/pipeline_schedule#project PipelineSchedule#project}

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.ref"></a>

- *Type:* java.lang.String

The branch/tag name to be triggered. This must be the full branch reference, for example: `refs/heads/main`, not `main`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/pipeline_schedule#ref PipelineSchedule#ref}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.active"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The activation of pipeline schedule. If false is set, the pipeline schedule will deactivated initially.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/pipeline_schedule#active PipelineSchedule#active}

---

##### `cronTimezone`<sup>Optional</sup> <a name="cronTimezone" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.cronTimezone"></a>

- *Type:* java.lang.String

The timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/pipeline_schedule#cron_timezone PipelineSchedule#cron_timezone}

---

##### `takeOwnership`<sup>Optional</sup> <a name="takeOwnership" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.Initializer.parameter.takeOwnership"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to `true`, the user represented by the token running Terraform will take ownership of the scheduled pipeline prior to editing it.

This can help when managing scheduled pipeline drift when other users are making changes outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/pipeline_schedule#take_ownership PipelineSchedule#take_ownership}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetActive">resetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetCronTimezone">resetCronTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetTakeOwnership">resetTakeOwnership</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetActive` <a name="resetActive" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetActive"></a>

```java
public void resetActive()
```

##### `resetCronTimezone` <a name="resetCronTimezone" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetCronTimezone"></a>

```java
public void resetCronTimezone()
```

##### `resetTakeOwnership` <a name="resetTakeOwnership" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.resetTakeOwnership"></a>

```java
public void resetTakeOwnership()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PipelineSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.pipeline_schedule.PipelineSchedule;

PipelineSchedule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.pipeline_schedule.PipelineSchedule;

PipelineSchedule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.pipeline_schedule.PipelineSchedule;

PipelineSchedule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.pipeline_schedule.PipelineSchedule;

PipelineSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PipelineSchedule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PipelineSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PipelineSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PipelineSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/pipeline_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PipelineSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.owner">owner</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.pipelineScheduleId">pipelineScheduleId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.activeInput">activeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronInput">cronInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronTimezoneInput">cronTimezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.refInput">refInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.takeOwnershipInput">takeOwnershipInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cron">cron</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronTimezone">cronTimezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.ref">ref</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.takeOwnership">takeOwnership</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.owner"></a>

```java
public java.lang.Number getOwner();
```

- *Type:* java.lang.Number

---

##### `pipelineScheduleId`<sup>Required</sup> <a name="pipelineScheduleId" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.pipelineScheduleId"></a>

```java
public java.lang.Number getPipelineScheduleId();
```

- *Type:* java.lang.Number

---

##### `activeInput`<sup>Optional</sup> <a name="activeInput" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.activeInput"></a>

```java
public java.lang.Object getActiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cronInput`<sup>Optional</sup> <a name="cronInput" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronInput"></a>

```java
public java.lang.String getCronInput();
```

- *Type:* java.lang.String

---

##### `cronTimezoneInput`<sup>Optional</sup> <a name="cronTimezoneInput" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronTimezoneInput"></a>

```java
public java.lang.String getCronTimezoneInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `refInput`<sup>Optional</sup> <a name="refInput" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.refInput"></a>

```java
public java.lang.String getRefInput();
```

- *Type:* java.lang.String

---

##### `takeOwnershipInput`<sup>Optional</sup> <a name="takeOwnershipInput" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.takeOwnershipInput"></a>

```java
public java.lang.Object getTakeOwnershipInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cron"></a>

```java
public java.lang.String getCron();
```

- *Type:* java.lang.String

---

##### `cronTimezone`<sup>Required</sup> <a name="cronTimezone" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.cronTimezone"></a>

```java
public java.lang.String getCronTimezone();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

---

##### `takeOwnership`<sup>Required</sup> <a name="takeOwnership" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.takeOwnership"></a>

```java
public java.lang.Object getTakeOwnership();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineSchedule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineScheduleConfig <a name="PipelineScheduleConfig" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.gitlab.pipeline_schedule.PipelineScheduleConfig;

PipelineScheduleConfig.builder()
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
    .cron(java.lang.String)
    .description(java.lang.String)
    .project(java.lang.String)
    .ref(java.lang.String)
//  .active(java.lang.Boolean)
//  .active(IResolvable)
//  .cronTimezone(java.lang.String)
//  .takeOwnership(java.lang.Boolean)
//  .takeOwnership(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.cron">cron</a></code> | <code>java.lang.String</code> | The cron (e.g. `0 1 * * *`). |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the pipeline schedule. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.project">project</a></code> | <code>java.lang.String</code> | The name or id of the project to add the schedule to. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.ref">ref</a></code> | <code>java.lang.String</code> | The branch/tag name to be triggered. This must be the full branch reference, for example: `refs/heads/main`, not `main`. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.active">active</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The activation of pipeline schedule. If false is set, the pipeline schedule will deactivated initially. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.cronTimezone">cronTimezone</a></code> | <code>java.lang.String</code> | The timezone. |
| <code><a href="#@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.takeOwnership">takeOwnership</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to `true`, the user represented by the token running Terraform will take ownership of the scheduled pipeline prior to editing it. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cron`<sup>Required</sup> <a name="cron" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.cron"></a>

```java
public java.lang.String getCron();
```

- *Type:* java.lang.String

The cron (e.g. `0 1 * * *`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/pipeline_schedule#cron PipelineSchedule#cron}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the pipeline schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/pipeline_schedule#description PipelineSchedule#description}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The name or id of the project to add the schedule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/pipeline_schedule#project PipelineSchedule#project}

---

##### `ref`<sup>Required</sup> <a name="ref" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.ref"></a>

```java
public java.lang.String getRef();
```

- *Type:* java.lang.String

The branch/tag name to be triggered. This must be the full branch reference, for example: `refs/heads/main`, not `main`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/pipeline_schedule#ref PipelineSchedule#ref}

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.active"></a>

```java
public java.lang.Object getActive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The activation of pipeline schedule. If false is set, the pipeline schedule will deactivated initially.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/pipeline_schedule#active PipelineSchedule#active}

---

##### `cronTimezone`<sup>Optional</sup> <a name="cronTimezone" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.cronTimezone"></a>

```java
public java.lang.String getCronTimezone();
```

- *Type:* java.lang.String

The timezone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/pipeline_schedule#cron_timezone PipelineSchedule#cron_timezone}

---

##### `takeOwnership`<sup>Optional</sup> <a name="takeOwnership" id="@cdktf/provider-gitlab.pipelineSchedule.PipelineScheduleConfig.property.takeOwnership"></a>

```java
public java.lang.Object getTakeOwnership();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to `true`, the user represented by the token running Terraform will take ownership of the scheduled pipeline prior to editing it.

This can help when managing scheduled pipeline drift when other users are making changes outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.3.0/docs/resources/pipeline_schedule#take_ownership PipelineSchedule#take_ownership}

---



